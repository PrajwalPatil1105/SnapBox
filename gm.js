
/**
* APIs used
* @api {POST} ot=g&an=nbmdm_tenants_row_id&av=' + tenantid + '&o==~=' - loadusersforGroup
* @api {POST} ot=ugma - userAppMapping
* @api {POST} ot=slna&an=t1.nbmdm_tenants_row_id~accessee_id~access_type&av=' + tenantid + '~' + gid + '~group&o==~=~=' - app_accessGroup
* @api {POST} ot=gum&an=row_id~nbmdm_tenants_row_id&av=' + gid + '~' + tenantid + '&o=IN~=&t=' + tokenid + '' - loadusersforGroupList
* @api {POST} ot=ugm - Add user to group - addUser
*/
var createdGroupsList,
    isappsMapped,
    usersMapped,
    appmappedlist = {},
    usersMappedList = {},
    btnclick = true,
    appstabClick = true,
    attrDescription = {},
    countFilter = 0,
    userClicked = 0,
    appClicked = 0,
    oTable = $('#userContainer_list');
var pageheadername = '<a href="#" onclick="redirectModule(\'home\');"><i class="bx bx-home-alt-2" style="margin-right:10px"></i></a>GROUP MANAGEMENT';

(function() {
    /*Compilation of handleBar templates*/
    createdGroupsList = Handlebars.compile($('#createdGroupsList').html());

})();
$(document).ready(function(e) {
    loadusersforGroup.openTab('list');
    loadusersforGroup.userAppMapping(tenantid);
    loadusersforGroup.GroupsDescription();
    hoverfunction();
});
$('#back-to-list').unbind('click');
$('#back-to-list').click(function(e) {
    loadusersforGroup.openTab('list');
    $('.panel-title').html('GROUP LIST');
    $('#page-header-container').html(pageheadername);
    $('#groupname').val('');
    $('#description').val('');
    $('.editGroup').loadingScreen('destroy');
    $('.create-button').loadingScreen('destroy');
    $('.delete-button').loadingScreen('destroy');
});
$(document).on('click', '#appAccessSubmit', function(e) {
    appClicked = 0;
    $('#closeApp').css({
        'opacity': 0.4,
        'pointer-events': 'painted'
    });
    $('#app_access_modelBox').modal('hide');
});
$('.create-button').unbind('click');
$('.create-button').click(function(e) {
    $(this).loadingScreen('input');
    loadusersforGroup.openTab('create');
});
var sList = "";
$('.addAppList .selectCheckbox').each(function() {
    sList += "(" + $(this).val() + "-" + (this.checked ? "checked" : "not checked") + ")";
});
$(document).on('change', '.list-check-box', function() {
    var checkedLength = $('.list-check-box:checked').length;
    if (checkedLength > 0) {
        $('.delete-button').removeClass('ti-inactive');
        $('.delete-button').removeClass('redOpacity');
    } else {
        $('.delete-button').addClass('ti-inactive');
        $('.delete-button').addClass('redOpacity');
    }
});
$(document).on('click', '#createGroup', function(e) {
    e.preventDefault();
    if ($('.createGroup').attr('flag') != 'edit')
        loadusersforGroup.openTab('create');
    else
        loadusersforGroup.openTab('Edit');
    loadusersforGroup.creategroup(e);
});
$(document).on('click', '#userContainer li', function(e) {
    loadusersforGroup.listSelect(this);
});
$(document).on('click', '.editGroup', function(e) {
    e.preventDefault();
    onEditEmail = true;
    $(this).loadingScreen('input');
    var rowId = $(this).attr('row_id');
    $('#createGroup').html("Update");
    $('#groupname').val(attrDescription[rowId]['name']);
    $('#description').val(attrDescription[rowId]['description']);
    var val = attrDescription[rowId]['description'].length;
    var remainingChar = 254 - val;
    $("#charCount").html(remainingChar + ' more characters available.');
    $('#createGroup').attr('flag', 'edit');
    loadusersforGroup.openTab('Edit');
    $('.createGroup').attr('rowid', rowId);
    $('.editGroup').loadingScreen('destroy');
});
$(document).on('click', '#resetbtn', function(e) {
    $('#groupname').val('');
    $('#description').val('');
    $("#charCount").html('254 more characters available.');

});
$(document).on('click', '#appContainer li', function(e) {
    loadusersforGroup.appListSelect(this);
});
$(document).on('click', '#addOrRemoveUserSubmit', function(e) {
    userClicked = 0;
    $('#close-button').css({
        'opacity': 0.4,
        'pointer-events': 'painted'
    });
    $('#addOrRemoveUser').modal('hide');
});
$(document).on('click', '.btn-default', function(e) {
    var currentGid = $('#userContainer').find('li').attr('gid'),
        currentGname = $('#userContainer').find('li').attr('gname');
    loadusersforGroup.userAppMapping(tenantid);
})
$(document).on('click', '.delete-button', function(e) {
    var r_id;
    var rowIdDelete = '';
    var elem = $(this);
    $('#group-list-tbody').find('.list-check-box:checked').each(function(index) {
        //to delete selected list
        r_id = rowIdDelete + $(this).closest('tr').attr('row_id');
    });
    var tnm = attrDescription[r_id]['name'];
    swal({
            title: "Are you sure?",
            text: "You want to delete Group : " + tnm + "?",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        },
        function() {
            loadusersforGroup.deleteGroup(r_id, elem);
        });
});
$('#description').keyup(function() {
    var txtCharCountLength = $(this).val().length;
    var remainingChar = 254 - txtCharCountLength;
    $("#charCount").html(remainingChar + ' more characters available.');
});
$(document).on('keyup', '#searchuserMapped', function() {
    var keyVal = $(this).val(),
        mode = $(this).attr('mode'),
        container = $("#userContainer li"), //,.addRoleList
        subContainer = $('#userContainer'),
        hiddenEle = 'li';
    if (keyVal == '' || keyVal == ' ') {
        countFilter = 0;
    }
    if (countFilter == 0) {

        if (keyVal != ' ') {
            if (mode == "userListSearch") {
                loadusersforGroup.filterMetaData(keyVal, container, subContainer, hiddenEle, 'list');
            }
        } else {
            $(this).val('');
        }
    } else if (countFilter != 0) {
        if (mode == "userListSearch") {
            loadusersforGroup.filterMetaData(keyVal, container, subContainer, hiddenEle, 'list');
        }
    }
});
$(document).on('keyup', '#searchAppMapped', function() {
    var keyVal = $(this).val(),
        mode = $(this).attr('mode'),
        container = $("#appContainer li"), //,.addRoleList
        subContainer = $('#appContainer'),
        hiddenEle = 'li';
    if (keyVal == '' || keyVal == ' ') {
        countFilter = 0;
    }
    if (countFilter == 0) {

        if (keyVal != ' ') {
            if (mode == "appListSearch") {
                loadusersforGroup.filterMetaData(keyVal, container, subContainer, hiddenEle, 'list');
            }
        } else {
            $(this).val('');
        }
    } else if (countFilter != 0) {
        if (mode == "appListSearch") {
            loadusersforGroup.filterMetaData(keyVal, container, subContainer, hiddenEle, 'list');
        }
    }
});
$(document).on('keyup', '#searchAppUser', function() {
    var keyVal = $(this).val(),
        found = false,
        container = oTable
    // $("#measure-list-container"),
    tr = oTable.find("tr");
    keyVal = keyVal.toLowerCase();
    for (i = 1; i < tr.length; i++) {
        found = false;
        var currentRow = tr[i],
            td = $(currentRow).find('td');
        // tr[i].getElementsByTagName("td");
        for (j = 0; j < (td.length - 1); j++) {
            var iconSearch = td[j];
            var userKeyid = $(currentRow).attr('row_id');
            var rowval = td[j].innerHTML.toLowerCase();
            if (j == 2) {

                if (found != true) {
                    if (!$(iconSearch).find('span').hasClass('selectDisable') && appmappedlist[userKeyid] != undefined) {
                        for (var key1 = 0; key1 < appmappedlist[userKeyid].length; key1++) {
                            var appsmapped = appmappedlist[userKeyid][key1].toLowerCase();
                            if (appsmapped.indexOf(keyVal) > -1) {
                                found = true;
                            }
                        }
                    }
                }
            }
            if (j == 1) {
                if (found != true) {
                    if (!$(iconSearch).find('span').hasClass('selectDisable') && usersMappedList[userKeyid] != undefined) {
                        for (var key2 = 0; key2 < usersMappedList[userKeyid].length; key2++) {
                            var usermapped = usersMappedList[userKeyid][key2].toLowerCase();
                            if (usermapped.indexOf(keyVal) > -1) {
                                found = true;
                            }
                        }
                    }
                }
            } else if (rowval.indexOf(keyVal) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
});
hoverfunction = function() {
    $('span.appsListCol').popover({
        html: true,
        placement: 'left',
        trigger: 'hover',
        container: 'body',

        content: function() {
            var userId = $(this).attr('row_id');
            var hoverStr = generateOnHoverStr(userId, 'apps');
            return hoverStr;
        }
    });
    $('span.usersListCol').popover({
        html: true,
        placement: 'left',
        trigger: 'hover',
        container: 'body',
        content: function() {
            var userId = $(this).attr('row_id');
            var hoverStr = generateOnHoverStr(userId, 'users');
            return hoverStr;
        }
    });
}
generateOnHoverStr = function(currentSelector, profileType) {
    var curtPernalJsn = currentSelector;
    var nameOnHover = [];
    if (profileType == 'apps')
        var checkedNames = appmappedlist[curtPernalJsn];
    else if (profileType == 'users')
        var checkedNames = usersMappedList[curtPernalJsn];
    if (typeof(checkedNames) != 'undefined') {
        for (var i = 0; i < checkedNames.length; i++) {
            if (checkedNames[i].levelName != undefined)
                nameOnHover.push(checkedNames[i].levelName);
            else {
                nameOnHover.push(checkedNames[i]);
            }
        }
    }
    nameOnHover = [...new Set(nameOnHover)];
    var lengthOfarr = nameOnHover.length;
    if (nameOnHover.length == 0) {
        if (profileType == 'users') {
            isNanomart = 'selectDisable';
            nameOnHover.push('No users added');
        } else if (profileType == 'apps') {
            isRolesMapped = 'selectDisable';
            nameOnHover.push('No apps mapped');
        }
    }
    finstr = '<div class="applied-filter-list">' +
        '<ul class="applied-filter-listing" style="list-style-type: none;margin-left:1px;">';
    if (nameOnHover.length > 15) {
        index = 14; // your index here
        nameOnHover.splice(index + 1, nameOnHover.length - (index + 1));
        if (lengthOfarr > 15 && profileType == 'users')
            nameOnHover.push(lengthOfarr - 15 + ' more users')
        if (lengthOfarr > 15 && profileType == 'apps')
            nameOnHover.push(lengthOfarr - 15 + ' more apps mapped')
    }
    for (var recStr = 0; recStr < nameOnHover.length; recStr++) {
        finstr = finstr + '<li>' + nameOnHover[recStr] + '</li>';
    }
    finstr = finstr + '</ul></div>';
    return finstr;
}
var loadusersforGroup = {
    GroupsDescription: function() {
        var date = new Date();
        var text = [];
        var url = "GetMethod";
        var groupList = $('#group-list-tbody');
        var listing = $('.group-list');
        groupList.html('');
        $.ajax({
            url: url,
            type: 'POST',
            data: {
                'url': encodeURIComponent(doServer + '?ot=g&an=nbmdm_tenants_row_id&av=' + tenantid + '&o==~='),
                'tokenid': tokenid,
                'param': +date.getMilliseconds(),
            },
            dataType: "json",
            success: function(application) {
                var defaultTrueFalse = 'default-true';
                var icon_path = '';
                for (var i = 0; i < application.g.length; i++) {
                    attrDescription[application.g[i].row_id] = {};
                    attrDescription[application.g[i].row_id]['name'] = application.g[i].name;
                    attrDescription[application.g[i].row_id]['description'] = application.g[i].description;
                    btnclick = false;
                    appstabClick = false;
                    isappsMapped = 'selectDisable';
                    usersMapped = 'selectDisable';
                    if (appmappedlist[application.g[i].row_id] != undefined) {
                        if (Object.entries(appmappedlist[application.g[i].row_id]).length != 0)
                            isappsMapped = 'btntagActive';
                    }
                    if (usersMappedList[application.g[i].row_id] != undefined) {
                        if (Object.entries(usersMappedList[application.g[i].row_id]).length != 0)
                            usersMapped = 'btntagActive';
                    }
                    text.push({
                        "nameOfGroup": application.g[i].name,
                        "userName": application.g[i].username,
                        "userId": application.g[i].created_by_user_id,
                        "row_id": application.g[i].row_id,
                        "userNone": 'none',
                        "icon_path": icon_path,
                        "isappsMapped": isappsMapped,
                        "usersMapped": usersMapped,
                        "editOrView": 'bxs-edit',
                        "hovertext": 'Edit group Details',
                        "created": application.g[i].created_datetime,
                        "updated": application.g[i].updated_datetime,
                        "created_by": application.g[i].create_by_username,
                        "updated_by": application.g[i].updated_by_username
                    });
                }
                groupList.empty().append(createdGroupsList(text));
            },
            beforeSend: function() {
                $('.forListLoading').loadingScreen('input');
            },
            error: function(errorType, textStatus, errorThrown) {
                // errorMsg(errorType, textStatus, errorThrown);
                $('.st-lst-cnt').find('ul').html('');
            },
            complete: function() {
                $('.forListLoading').loadingScreen('destroy');
                loadusersforGroup.loadDataTable();
                hoverfunction();
            }
        });
    },
    loadDataTable: function() {
        /*Initialising the dataTable function*/
        var oTable;
        if (metaDataListHeader == null || metaDataListHeader == '' || metaDataListHeader == "undefined") {
            var metaDataListHeaderValue = '#335885';
        } else {
            var metaDataListHeaderValue = metaDataListHeader;
        }
        if (typeof oTable == 'undefined') {
            oTable = $("#userContainer_list").dataTable({
                "order": [
                    [4, "desc"]
                ],
                "bDestroy": true,
                bFilter: false,
            });
            $('div.ui-widget-header').css('background-color', metaDataListHeaderValue);
        } else {
            oTable.fnClearTable(false); // Here i do not want to redraw the table.
            $("#userContainer_list").dataTable({
                "order": [
                    [4, "desc"]
                ],
                "bDestroy": true,
                bFilter: false,
            });
            $('div.ui-widget-header').css('background-color', metaDataListHeaderValue);
        }
    },
    filterMetaData: function(key, container, subContainer, hiddenEle, mode) {
        /*Generic function to apply search*/
        var str = key;
        str = str.toLowerCase();
        var x = container.filter(function() {
            return $(this).text().toLowerCase().indexOf(str) != -1;
        });
        subContainer.find(hiddenEle).css('display', 'none');
        x.each(function(e) {
            if (mode == 'normal') {
                $(this).css('display', 'block');
            } else {
                $(this).css('display', 'inline-block');
            }
        });
        if (x.length == 0) {
            $('tbody#' + container).append('<tr>No records found</tr>');
        }
        countFilter++;
    },
    userAppMapping: function(tenantid) {
        var date = new Date();
        var tenantRoleAssign = {};
        var jsonObject = {};
        jsonObject['tenant_id'] = tenantid;
        var url = base_url + "/DataObjectServer/data/do/kvr";
        $.ajax({
            type: 'POST',
            async: false,
            url: url,
            data: {
                'ot': 'ugma',
                'kv': JSON.stringify(jsonObject),
                't': tokenid
            },
            dataType: 'json',
            beforeSend: function() {
            },
            success: function(data) {
                for (var usrRow_id in data.ugma) {
                    var appsSelected = [],
                        assignedNanomart = [],
                        usersSelected = [];
                    if (data.ugma[usrRow_id]['app'] != undefined) {
                        for (var i = 0; i < data.ugma[usrRow_id]['app'].length; i++) {
                            appsSelected.push(data.ugma[usrRow_id]['app'][i]);
                        }
                    }
                    if (data.ugma[usrRow_id]['users'] != undefined) {
                        for (var j = 0; j < data.ugma[usrRow_id]['users'].length; j++) {
                            usersSelected.push(data.ugma[usrRow_id]['users'][j]);
                        }
                    }
                    usersMappedList[usrRow_id] = [...new Set(usersSelected)];
                    appmappedlist[usrRow_id] = [...new Set(appsSelected)];
                }
            },
            error: function(errorType, textStatus, errorThrown) {},
            complete: function() {}
        });
    },
    listSelect: function(list) {
        var elm = $(this);
        var previousVal = $(list).attr('previousVal');
        var classSelectedOrNot = $(list).hasClass('btntagActive');
        var rowid = $(list).attr('row_id')
        var gid = $(list).attr('gid');
        var gname = $(list).attr('gname');
        var username = $(list).attr('registered_email');
        if (classSelectedOrNot) {
            if (usersMappedList[gid].length == 0) {
                elem = gid ? $('#userContainer_list_wrapper').find('.usersListCol[row_id=' + gid + ']') : '';
                elem.removeClass('btntagActive').addClass('selectDisable')
            }
            loadusersforGroup.removeUser(rowid, gid, gname, username);
        } else {
            if (usersMappedList[gid].length != 0) {
                elem = gid ? $('#userContainer_list_wrapper').find('.usersListCol[row_id=' + gid + ']') : '';
                elem.removeClass('selectDisable').addClass('btntagActive')
            }
            loadusersforGroup.addUser(rowid, gid, gname, username);
        }

        var setFlag = $(list).attr('setFlag')
        if (previousVal == "true" && classSelectedOrNot == true) {
            if (setFlag == "true") {
                $(list).attr('setFlag', 'false');
            } else if (setFlag == "false") {
                $(list).attr('setFlag', 'true');
            }
        } else if (previousVal == "true" && classSelectedOrNot == false) {
            if (setFlag == "true") {
                $(list).attr('setFlag', 'false');
            } else if (setFlag == "false") {
                $(list).attr('setFlag', 'true');
            }
        } else {
            if (setFlag == "true") {
                $(list).attr('setFlag', 'false');
            } else if (setFlag == "false") {
                $(list).attr('setFlag', 'true');
            }
        }

        $(list).toggleClass('btntagActive');
    },
    appListSelect: function(list) {
        var previousVal = $(list).attr('previousVal');
        var classSelectedOrNot = $(list).hasClass('btntagActive');
        var rowid = $(list).attr('artifact_id')
        var gid = $(list).attr('gid');
        var artifact_id = $(list).attr('artifact_id');
        var artifact_type = $(list).attr('artifact_type')
        var accessee_id = $(list).attr('accessee_id');
        var accessee_type = $(list).attr('accessee_type');
        var selectedappname = $(list).attr('title');
        if (classSelectedOrNot) {
            if (appmappedlist[gid].length != 0) {
                var apptr = $('#group-list-tbody').find('tr[row_id=' + gid + ']');
            }
            loadusersforGroup.removeApp(rowid, gid, selectedappname);
        } else {
            if (appmappedlist[gid].indexOf(selectedappname) == -1) {
                appmappedlist[gid].push(selectedappname);
            }
            if (appmappedlist[gid].length != 0) {
                var apptr = $('#group-list-tbody').find('tr[row_id=' + gid + ']');

            }
            loadusersforGroup.addApp(artifact_id, artifact_type, accessee_id, accessee_type);
        }
        var setFlag = $(list).attr('setFlag')
        if (previousVal == "true" && classSelectedOrNot == true) {
            if (setFlag == "true") {
                $(list).attr('setFlag', 'false');
            } else if (setFlag == "false") {
                $(list).attr('setFlag', 'true');
            }
        } else if (previousVal == "true" && classSelectedOrNot == false) {
            if (setFlag == "true") {
                $(list).attr('setFlag', 'false');
            } else if (setFlag == "false") {
                $(list).attr('setFlag', 'true');
            }
        } else {
            if (setFlag == "true") {
                $(list).attr('setFlag', 'false');
            } else if (setFlag == "false") {
                $(list).attr('setFlag', 'true');
            }
        }

        $(list).toggleClass('btntagActive');
    },
    app_accessGroup: function(gid, appstabClick, gname) {
        if (appstabClick != false)
            $('#app_access_modelBox').modal('show');
        appContainer = $('#appContainer');
        var txtnewNanomart = [],
            appsSelected = [];
        var date = new Date();
        $.ajax({
            url: "GetMethod",
            type: 'POST',
            async: false,
            data: {
                'url': encodeURIComponent(doServer + '?ot=slna&an=t1.nbmdm_tenants_row_id~accessee_id~access_type&av=' + tenantid + '~' + gid + '~group&o==~=~='),
                'tokenid': tokenid,
                'param': +date.getMilliseconds(),
            },
            dataType: "json",
            success: function(apps) {
                var text = [];
                for (var i = 0; i < apps.slna.length; i++) {
                    var rowId = apps.slna[i].row_id,
                        name = apps.slna[i].name,
                        accessee_id = gid,
                        artifact_type = apps.slna[i].artifact_type,
                        accessee_type = apps.slna[i].accessee_type;
                    var selected = 'btntagActive';
                    if (apps.slna[i].accessee_id == gid) {
                        appsSelected.push(name);
                        txtnewNanomart.push('<li class="label label-warning appGroup-tags ' + selected + '" previousVal="true" setFlag="true"  gid="' + gid + '" gname="' + gname + '" artifact_id="' + rowId + '" accessee_id="' + accessee_id + '" artifact_type="' + artifact_type + '" accessee_type="' + accessee_type + '" title="' + name + '" >' + name + '</li>');
                    } else {
                        txtnewNanomart.push('<li class="label label-warning appGroup-tags" previousVal="false" setFlag="false" gid="' + gid + '" gname="' + gname + '" artifact_id="' + rowId + '" accessee_id="' + accessee_id + '" artifact_type="' + artifact_type + '" accessee_type="' + accessee_type + '" title="' + name + '" >' + name + '</li>');
                    }
                }
                appmappedlist[gid] = [...new Set(appsSelected)];
                appContainer.html(txtnewNanomart.join(''));
            }
        });
    },
    loadusersforGroupList: function(gid, gname, btnclick, buttonOk) {
        if (btnclick != false)
            $('#addOrRemoveUser').modal('show');
        var date = new Date(),
            url = "GetMethod";
        var seletedUser = [];
        var usersSelected = [];
        var userListContainer = $('#userContainer'),
            url = "GetMethod" + '?ts=' + new Date().getTime(),
            text = [],
            txtnewNanomart = [];
        $.ajax({
            url: url,
            type: 'POST',
            async: false,
            data: {
                'url': encodeURIComponent(doServer + '?ot=gum&an=row_id~nbmdm_tenants_row_id&av=' + gid + '~' + tenantid + '&o=IN~=&t=' + tokenid + ''),
                'tokenid': tokenid,
                'param': +date.getMilliseconds(),
            },
            dataType: "json",
            success: function(Users) {
                var text = [];
                for (var i = 0; i < Users.gum.length; i++) {
                    text.push('<li class="label label-warning nano-tags btntagActive " previousVal="true" setFlag="true" registered_email="' + Users.gum[i].username + '" row_id="' + gid + '" title="' + name + '">' + gname + '</li>');
                    seletedUser.push(Users.gum[i].row_id);
                    attrDescription[Users.gum[i].row_id] = {};
                    attrDescription[Users.gum[i].row_id]['name'] = Users.gum[i].username;
                }
            },
            beforeSend: function() {
                $(buttonOk).loadingScreen('input');
            },
            complete: function() {
                $(buttonOk).loadingScreen('destroy');
            }
        });
        $.ajax({
            url: url,
            type: 'POST',
            async: false,
            data: {
                'url': encodeURIComponent(doServer + '?ot=uact&an=nbmdm_tenants_row_id~active_flag&av=' + tenantid + '~y&o==~='),
                'tokenid': tokenid,
                'param': +date.getMilliseconds(),
            },
            dataType: "json",
            success: function(Users) {
                var text = [];
                for (var i = 0; i < Users.uact.length; i++) {
                    var rowId = Users.uact[i].row_id,
                        name = Users.uact[i].name,
                        registered_email = Users.uact[i].registered_email,
                        selected = seletedUser.indexOf(rowId) == -1 ? '' : 'btntagActive';
                    if (selected) {
                        usersSelected.push(registered_email);
                        txtnewNanomart.push('<li class="label label-warning userGroup-tags ' + selected + '" previousVal="true" setFlag="true" registered_email="' + registered_email + '" gid="' + gid + '" gname="' + gname + '" row_id="' + rowId + '" title="' + name + '" >' + name + '</li>');
                    } else {
                        txtnewNanomart.push('<li class="label label-warning userGroup-tags" previousVal="false" setFlag="false" gid="' + gid + '" gname="' + gname + '" registered_email="' + registered_email + '" row_id="' + rowId + '" title="' + name + '" >' + name + '</li>');
                    }

                }
                usersMappedList[gid] = [...new Set(usersSelected)];
                userListContainer.html(txtnewNanomart.join(''));
            },
            beforeSend: function() {
                $('#buttonOk').loadingScreen('input');
            },
            complete: function() {
                $('#buttonOk').loadingScreen('destroy');
            }
        });
    },
    addUser: function(rowid, groupid, gname, username) {
        var jsonString = [],
            jsonObject = {},
            ldSp = $('.mod-hdr').find('span.mdNonUsers');;
        jsonObject['nbmdm_tenants_row_id'] = tenantid;
        jsonObject['nbmds_users_row_id'] = rowid;
        jsonObject['nbmds_groups_row_id'] = groupid;
        jsonString.push(jsonObject);
        jsonString = JSON.stringify(jsonString);
        var parameter = {};
        parameter['ot'] = 'ugm';
        parameter['kv'] = jsonString;
        parameter['t'] = tokenid;
        parameter = JSON.stringify(parameter);
        $.ajax({
            type: 'POST',
            async: false,
            url: 'postMethod?ts=' + new Date().getTime(),
            data: {
                'parameter': encodeURIComponent(parameter),
                'url': encodeURIComponent(doServer + '/kvc'),
                'tokenid': tokenid,
            },
            dataType: 'json',
            beforeSend: function() {
                ldSp.loadingScreen('input');
            },
            success: function(status) {
                userClicked++;
                $('#addOrRemoveUserSubmit').removeAttr('disabled');
                $('#close-button').css({
                    'opacity': 0,
                    'pointer-events': 'none'
                });
                //  statusMsgForAddingUser("User Added Successfully");  
                $.amaran({
                    'message': 'User Group mapping successful',
                    inEffect: 'slideBottom'
                });
                if (usersMappedList[groupid].indexOf(username) == -1) {
                    usersMappedList[groupid].push(username);
                }
                if (usersMappedList[groupid].length != 0) {
                    var usertr = $('#group-list-tbody').find('tr[row_id=' + groupid + ']');
                    $(usertr).find('.usersListCol').removeClass('btntagActive').addClass('btntagActive');
                }
            },
            error: function(errorType, textStatus, errorThrown) {
                errorMsg(errorType, textStatus, errorThrown);
            },
            complete: function() {
                ldSp.loadingScreen('destroy');
            }
        });

    },
    removeUser: function(rowid, groupid, gname, username) {
        ldSp = $('.mod-hdr').find('span.mdNonUsers');
        url = "DeleteMethod" + '?ts=' + new Date().getTime();
        $.ajax({
            type: 'GET',
            url: url,
            data: {
                'url': encodeURIComponent(doServer + '/gum/' + rowid + ':' + groupid),
                'tokenid': tokenid,
            },
            async: false,
            beforeSend: function() {
                ldSp.loadingScreen('input');
            },
            success: function(solution) {
                userClicked++;
                $('#addOrRemoveUserSubmit').removeAttr('disabled');
                $('#close-button').css({
                    'opacity': 0,
                    'pointer-events': 'none'
                });
                $.amaran({
                    'message': 'User Group mapping successful',
                    inEffect: 'slideBottom'
                });
                if (usersMappedList[groupid].indexOf(username) != -1) {
                    usersMappedList[groupid].splice(username, 1);
                }
                if (usersMappedList[groupid].length == 0) {
                    var usertr = $('#group-list-tbody').find('tr[row_id=' + groupid + ']');
                    $(usertr).find('.usersListCol').removeClass('btntagActive').addClass('selectDisable');
                }
            },
            error: function(errorType, textStatus, errorThrown) {
                errorMsg(errorType, textStatus, errorThrown);
            },
            complete: function() {
                ldSp.loadingScreen('destroy');
            }
        });
    },
    addApp: function(artifact_id, artifact_type, accessee_id, accessee_type) {
        var parameter = {},
            url = "postMethod";
        var action = 'create';
        var appAccessList = [];
        appAccessList.push({
            'artifact_id': artifact_id,
            'artifact_type': 'app',
            'accessee_id': accessee_id,
            'accessee_type': 'group'
        });
        parameter['ot'] = 'ia';
        parameter['kv'] = JSON.stringify(appAccessList);;
        parameter['t'] = tokenid;
        parameter = JSON.stringify(parameter);
        action = action == 'update' ? 'kvu' : 'kvc';
        $.ajax({
            url: url,
            type: 'POST',
            async: false,
            data: {
                'parameter': encodeURIComponent(parameter),
                'url': encodeURIComponent(doServer + '/' + action),
                'tokenid': tokenid,
            },
            dataType: 'json',
            beforeSend: function() {
            },
            success: function(status) {
                appClicked++;
                $('#appAccessSubmit').removeAttr('disabled');
                $('#closeApp').css({
                    'opacity': 0,
                    'pointer-events': 'none'
                });
                $.amaran({
                    'message': 'App/Apps Group mapping successful',
                    inEffect: 'slideBottom'
                });
                if (appClicked != 0) {
                    var apptr = $('#group-list-tbody').find('tr[row_id=' + gid + ']');
                    $(apptr).find('.appsListCol').removeClass('selectDisable').addClass('btntagActive');
                }
            },
            error: function(errorType, textStatus, errorThrown) {
                errorMsg(errorType, textStatus, errorThrown);
            },
            complete: function() {}
        });
    },
    removeApp: function(rowid, groupid, selectedappname) {
        var path = doServer + '/iaa/' + rowid + ':' + groupid;
        $.ajax({

            url: 'DeleteMethod?url=' + path + '&tokenid=' + tokenid,
            dataType: "html",
            async: false,
            beforeSend: function() {},
            success: function(solution) {
                appClicked++;
                $('#appAccessSubmit').removeAttr('disabled');
                $('#closeApp').css({
                    'opacity': 0,
                    'pointer-events': 'none'
                });
                $.amaran({
                    'message': 'App/Apps Group mapping successful',
                    inEffect: 'slideBottom'
                });
                if (appmappedlist[groupid].indexOf(selectedappname) != -1) {
                    var index = appmappedlist[groupid].indexOf(selectedappname);
                    delete appmappedlist[groupid][index][selectedappname];
                    appmappedlist[groupid].length--;
                }
                if (appmappedlist[groupid].length == 0) {
                    var apptr = $('#group-list-tbody').find('tr[row_id=' + gid + ']');
                    $(apptr).find('.appsListCol').removeClass('btntagActive').addClass('selectDisable');
                }
            },
            error: function(errorType, textStatus, errorThrown) {
                errorMsg(errorType, textStatus, errorThrown);
            },
            complete: function() {}
        });
    },
    creategroup: function(e) {
        e.preventDefault();
        var fspar = $('#createGroup');
        var nm = $('#groupname').val();
        var desc = $('#description').val();
        var icon_path = '';
        var icon_content = '';
        var patternName = /^([a-zA-Z0-9_-]){8,32}$/;
        var patternDesc = /^([a-zA-Z0-9_ ]){8,248}$/;
        if (nm == null || !patternName.test(nm)) {
            $('.errorMsg1').css('color', '#F00').html("Name min length must be at least 8 characters and should not contain space trailing with underscores");
            $('#groupname').focus();
            $('#groupname').keydown(function(event) {
                $('.errorMsg1').html('');
                return;
            });
        }
        if (desc == null || !patternDesc.test(desc)) {
            $('.errorMsg2').css('color', '#F00').html("Description min length must be at least 8 characters");
            $('#description').focus();
            $('#description').keydown(function(event) {
                $('.errorMsg2').html('');
                return;
            });
        }
        if (patternName.test(nm) && patternDesc.test(desc)) {
            //Create Group
            if ($('.createGroup').attr('flag') == 'create') {
                var columnName = 'name~description~icon_path~icon_content';
                var columnValue = nm + '~' + desc + '~' + icon_path + '~' + icon_content;
                var parameter = {};
                parameter['ot'] = 'g';
                parameter['an'] = columnName;
                parameter['av'] = columnValue;
                parameter['t'] = tokenid;
                parameter = JSON.stringify(parameter);
                $.ajax({
                    type: 'POST',
                    url: 'postMethod',
                    data: {
                        'parameter': encodeURIComponent(parameter),
                        'url': encodeURIComponent(doServer),
                        'tokenid': tokenid,
                    },
                    dataType: 'json',
                    success: function(status) {
                        // statusMsg('Group created successfully');
                        $('#userContainer_list').dataTable().fnDestroy();
                        $('#resetbtn').click();
                        loadusersforGroup.openTab('list');
                        loadusersforGroup.GroupsDescription();
                        $.amaran({
                            'message': 'Group created successfully!',
                            inEffect: 'slideBottom'
                        });
                    },
                    error: function(errorType, textStatus, errorThrown) {
                        // errorMsg(errorType, textStatus, errorThrown);
                    },
                    beforeSend: function() {
                        fspar.loadingScreen('input');
                    },
                    complete: function() {
                        fspar.loadingScreen('destroy');
                    },
                });
            } else if ($('.createGroup').attr('flag') == 'edit') {
                var id = $('.createGroup').attr('rowId');
                var columnName = 'name~description';
                var columnValue = nm + '~' + desc;
                var parameter = {};
                parameter['ot'] = 'g';
                parameter['an'] = columnName;
                parameter['av'] = columnValue;
                parameter['t'] = tokenid;
                parameter['rid'] = id;
                parameter = JSON.stringify(parameter);
                $.ajax({
                    type: 'POST',
                    url: 'postMethod',
                    data: {
                        'parameter': encodeURIComponent(parameter),
                        'url': encodeURIComponent(doServer + "/u"),
                        'tokenid': tokenid,
                    },
                    dataType: 'json',
                    success: function(status) {
                        $('#userContainer_list').dataTable().fnDestroy();
                        $('#resetbtn').click();
                        loadusersforGroup.openTab('list');
                        loadusersforGroup.GroupsDescription();
                        $.amaran({
                            'message': 'Group updated successfully!',
                            inEffect: 'slideBottom'
                        });
                    },
                    error: function(errorType, textStatus, errorThrown) {},
                    beforeSend: function() {
                        fspar.loadingScreen('input');
                    },
                    complete: function() {
                        fspar.loadingScreen('destroy');
                    }
                });
            }
        } else {
            return;
        }
    },

    deleteGroup: function(id, fspar) {
        var path = doServer + '/g/' + id;
        $.ajax({
            url: 'DeleteMethod?url=' + path + '&tokenid=' + tokenid,
            dataType: "html",
            success: function(solution) {
                loadusersforGroup.openTab('list');
                $('#userContainer_list').dataTable().fnDestroy();
                loadusersforGroup.GroupsDescription();
                $('.delete-button').addClass('ti-inactive');
                $('.delete-button').addClass('redOpacity');
                swal("Deleted!", "Group has been deleted.", "success");
            },
            error: function(errorType, textStatus, errorThrown) {
                fspar.loadingScreen('destroy');
                // errorMsg(errorType, textStatus, errorThrown);
            },
            beforeSend: function() {
                fspar.loadingScreen('input');
            },
            complete: function() {
                fspar.loadingScreen('destroy');
            }
        });
    },

    openTab: function(option) {
        if (option == 'create') {
            $('#page-header-container').html(pageheadername);
            $("#charCount").html('254 more characters available.');
            $('.panel-title').html('CREATE GROUP');
            $('.create-group').removeClass('none');
            $('.createGroup').attr('flag', 'create');
            $('.group-list').addClass('none');
            $('#back-to-list').show();
            $('.createGroup').html('CREATE');
            $('.createGroup').attr('flag', 'create');
        }
        if (option == 'list') {
            $('#page-header-container').html(pageheadername);
            $('.panel-title').html('GROUP LIST');
            $('.group-list').removeClass('none');
            $('.create-group').addClass('none');
            $('#back-to-list').hide();

        }
        if (option == 'Edit') {
            $('#page-header-container').html(pageheadername);
            $('.panel-title').html('EDIT GROUP');
            $('#back-to-list').show();
            $('.create-group').removeClass('none');
            $('.group-list').addClass('none');
            $('.createGroup').attr('flag', 'edit');
        }
    }
};