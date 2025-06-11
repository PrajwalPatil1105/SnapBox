<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Manage Group</title>
    <link class="main-stylesheet" href="/NanoClientApplication/css/vendor/bootstrap/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="/NanoClientApplication/css/vendor/bootstrap/boot-compiled.css">
    <link rel="stylesheet" href="/NanoClientApplication/css/vendor/ggtooltip.css">
    <link rel="stylesheet" href="/NanoClientApplication/css/vendor/main.css">
    <%-- LDP 3091 - Library Upgrade --%>
    <link rel="stylesheet" href="/NanoClientApplication/css/vendor/jquery/jquery-ui.css">
    <%-- LDP 3091 - Library Upgrade --%>
    <link rel="stylesheet" href="/NanoClientApplication/css/vendor/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="/NanoClientApplication/css/vendor/sweet-alert.css">
    <link rel="stylesheet" href="/NanoClientApplication/css/vendor/animate.css">
    <link rel="stylesheet" href="/NanoClientApplication/css/vendor/datatables/datatables.bootstrap.css">
    <link rel="stylesheet" href="/NanoClientApplication/css/vendor/jquery/jquery.mcustomscrollbar.min.css">
    <link rel="stylesheet" href="/NanoClientApplication/css/vendor/amaran/amaran.min.css">
    <link rel="stylesheet" href="/NanoClientApplication/css/vendor/themify-icons.css">
    <link rel="stylesheet" href="/NanoClientApplication/css/curated/curated.css">
    <link rel="stylesheet" href="/NanoClientApplication/css/vendor/jquery/jquery.mcustomscrollbar.css">
    <link rel="stylesheet" href="/NanoClientApplication/css/vendor/intltelinput.css">
    <link rel='stylesheet' href='/NanoClientApplication/css/vendor/fonts/boxicons/css/boxicons.min.css'>
</head>
<style>
    .redOpacity{
            opacity: 0.7;
            cursor: inherit !important;
        }
    #createGroup .loadingScreenImageinput{
            margin-left: -79px;
            margin-top: 14px;
        }
    .forListLoading .loadingScreenImageinput{
        margin-left: 46px;
        margin-top: 14px;
    }
    .dropdown-menu li > a {
       display: block;
       padding: 3px 20px;
       clear: both;
       font-weight: normal;
       line-height: 1.42857143;
       color: #333333;
       white-space: nowrap;
       cursor: pointer;
       text-decoration: none;
   }
   table.dataTable {
       margin: 0;
     }

   .intl-tel-input{
      width: 51%;
   }
  .dropdown-menu li > a:hover{
            background: #eee;
        }
        
  .mCSB_inside > .mCSB_container{
            margin-right: 0 !important;
        }
  .radio-info input[type="radio"] + label::after {
        background: #555555;
   }
  .cursor-pointer{
  cursor: pointer;
}
   .none{
        display: none !important;   
    }
 .reduceOpacity{
         opacity: 0.4;   
 }
.btn-group.open .dropdown-toggle {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6)
}
ul{
 list-style-type: none;
}
li.label.userGroup-tags {
   margin: 3px;
   font-size: 0.8em;
   padding: 8px 32px !important;
   font-size: 1em !important;
   padding: 8px 32px !important;
   font-weight: 400 !important;
   cursor: pointer;
  transition: all .3s ease-in;
}
li.label.appGroup-tags {
  margin: 3px;
   font-size: 0.8em;
   padding: 8px 32px !important;
   font-size: 1em !important;
   padding: 8px 32px !important;
   font-weight: 400 !important;
   cursor: pointer;
  transition: all .3s ease-in;
}
.btn.custom-dropdown{
    background: #fff;
    color: #000;
    border:1px solid #eee;
}
.mCSB_container_wrapper > .mCSB_container{
  padding-right: 0!important;
}
.mCSB_container_wrapper{
  margin-right: 0!important;
}
.custom-dropdown:hover{
    background: #fff;
    color:#000;
     border:1px solid #eee;

}
.custom-lg-dropdown{
    width: 126%;
}
.custom-dropdown{
    width: 80%;
    border: 1px solid #F4F4F4;
    background: #FFF;
    color: #444;
    min-height: 35px;
}
.padding-md-rl{
    padding:0 2%;
}
.metadata-btn-badge{
    font-size: 1.3em;
    margin-right: 5%;
    padding: 5% 5%;
    
    border-radius: 50%;
    color: #FAF8F8;
}
.crt-metadata-btn{
    background: #1C8CFA;;
}
.refresh-metadata-btn{
    background: #23C8C8;
}
.del-metadata-btn{
    background: #F95E64;
}
.txt-blue{
    color: #25ACFF;
}
#wrp-for-tree{
   
background: #EDEDED;
}
.fa-tree-icon{
    font-size: 1.3em;
vertical-align: middle;
}
#left ul.nav {
    margin-bottom: 2px;
    font-size: 12px; 
}
#left ul.nav ul,
#left ul.nav ul li {
    list-style: none!important;
    list-style-type: none!important;
    margin-top: 1px;
    margin-bottom: 1px;
}
#left ul.nav ul {
    padding-left: 0;
    width: 230px;
}
#left ul.nav ul.children {
    padding-left: 12px;
    width: 230px;
}
#left ul.nav ul.children li{
    margin-left: 0px;
}
#left ul.nav li a:hover {
    text-decoration: none;
}

#left ul.nav li a:hover .lbl {
    color: #999!important;
}

#left ul.nav li.current>a .lbl {
    background-color: #999;
    color: #fff!important;
}

#left ul.nav li.parent a {
    padding: 0px;
    color: #ccc;
}
#left ul.nav>li.parent>a {
    border: solid 1px #999;
    text-transform: uppercase;
}    
#left ul.nav li.parent a:hover {
    background-color: #fff;
    -webkit-box-shadow:inset 0 3px 8px rgba(0,0,0,0.125);
    -moz-box-shadow:inset 0 3px 8px rgba(0,0,0,0.125);
    box-shadow:inset 0 3px 8px rgba(0,0,0,0.125);    
}

#left ul.nav li.parent ul li a {
    color: #222;
    border: none;
    display:block;
    padding-left: 5px;    
}

#left ul.nav li.parent ul li a:hover {
    background-color: #fff;
    -webkit-box-shadow:none;
    -moz-box-shadow:none;
    box-shadow:none;  
}

#left ul.nav li .sign {
    display: inline-block;
    width: 28px;
    padding: 5px 8px;
    background-color: transparent;
    color: #000;
}
#left ul.nav li.parent>a>.sign{
    margin-left: 0px;
}

#left ul.nav li .lbl {
    padding: 5px 1px;
    display: inline-block;
}
#left ul.nav li.current>a>.lbl {
    color: #fff;
}
#left ul.nav  li a .lbl{
    font-size: 12px;
}

#left ul.nav>li.item-1.parent>a {
border: solid 1px rgba(228, 228, 228, 0.77);
padding:3% 0;
}
#left ul.nav>li.item-1.parent>a>.sign, #left ul.nav>li.item-1 li.parent>a>.sign {
margin-left: 0px;
}

#left ul.nav>li.item-1 .lbl {
color: #514B47;
}
#left ul.nav>li.item-1 li.current>a .lbl {
    background-color: #3b4058;
    color: #fff!important;
}


#left ul.nav>li.item-8.parent>a {
    border: solid 1px #51c3eb;
}
#left ul.nav>li.item-8.parent>a>.sign,
#left ul.nav>li.item-8 li.parent>a>.sign{
    margin-left: 0px;
    background-color: #51c3eb;
}
#left ul.nav>li.item-8 .lbl {
    color: #51c3eb;
}
#left ul.nav>li.item-8 li.current>a .lbl {
    background-color: #51c3eb;
    color: #fff!important;
}

#left ul.nav>li.item-15.parent>a {
    border: solid 1px #94cf00;
}
#left ul.nav>li.item-15.parent>a>.sign,
#left ul.nav>li.item-15 li.parent>a>.sign{
    margin-left: 0px;
    background-color: #94cf00;
}
#left ul.nav>li.item-15 .lbl {
    color: #94cf00;
}
#left ul.nav>li.item-15 li.current>a .lbl {
    background-color: #94cf00;
    color: #fff!important;
}


#left ul.nav>li.item-22.parent>a {
    border: solid 1px #ef409c;
}
#left ul.nav>li.item-22.parent>a>.sign,
#left ul.nav>li.item-22 li.parent>a>.sign{
    margin-left: 0px;
    background-color: #ef409c;
}
#left ul.nav>li.item-22 .lbl {
    color: #ef409c;
}
#left ul.nav>li.item-22 li.current>a .lbl {
    background-color: #ef409c;
    color: #fff!important;
}
.fnt{
    cursor:pointer;
}
.table-li{
 padding: 0 0 0 18px;  
}
#select-mart{
        overflow:hidden;
    }
    #select-app{
        overflow:hidden;
    }
    #select-mart,#select-app
        {
           transform: translate3d(0px,36.8px,0px)!important;
         }  
    .btn-dropdown-arrow{
   background: #47A3EF;
   border: 1px solid rgba(19, 118, 249, 1);
   color: #eee;
  }
.btn-royal-blue{
   background: #06AAFF;
   border: 1px solid #06AAFF;
   color: #eee;
  }
  .btn-dark-blue{
   background: #eee;
   border: 1px solid #eee;
   color: #000;
   box-shadow: 0 0 3px #eee;
  }
  .btn-dark-red{
   background: #FA4E4E;
   border: 1px solid #FA4E4E;
   color: #eee;
  }
    .dataTables_scrollBody{
        overflow: hidden;
    }
  .form-control{
      border:1px solid #EAEAEA;
    }
    
    .form-horizontal .control-label{
      text-align: left;
      text-transform: uppercase;
      font-weight: bold;
      
    }
   
    textarea {
border-color: #EAEAEA;
}
#dropFeauture {
  display: none;
}
.show {
  display: block !important;
}
     #sel_box option{
      line-height: 31px;
      height: 30px;
     }

    .fc-field {
      width: 99%;
      height: 48px;
      margin: 5px;
      margin-bottom: 10px;
      padding: 5px;
      background-color: #F9F9F9;
      box-shadow: 0px 0px 2px 0px #DFDFDF;
}
ul.applied-filter-listing {
    min-width: 180px;
    margin: 0;
    padding-bottom: 2px;
    padding-top: 2px;
    padding-left: 0px;
    padding-right: 0px;
    
}

ul.applied-filter-listing li {
    list-style: disc;
    font-size: 14px;
    font-weight: 500;
    padding-left: 0px;
    padding-right: 0px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 15em
}

ul.applied-filter-listing li:last-child {
    border-bottom: 0
}
ul.applied-filter-listing li:nth-child(16) {  
  color: red;
}
ul.applied-filter-listing li:before {
    content: '\f1db';
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome !important;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    margin-right: 5px
}
  .btntagActive {
    background-color: green; 
  }
    .btn-royal-blue{
      background: #06AAFF;
      border: 1px solid #06AAFF;
      color: #eee;
    }
    .btn-dark-blue{
      background: #eee;
      border: 1px solid #eee;
      color: #000;
      box-shadow: 0 0 3px #eee;
    }
    .btn-dark-red{
      background: #FA4E4E;
      border: 1px solid #FA4E4E;
      color: #eee;
    }
     #alluserOptions{
          position: absolute;
          right: -55px;
          color: black;
          top: 40px;
          z-index: 999999999;
          background: #f9f9f9;
          padding: 0;
          border: 1px solid #b5b5b5;
          border-radius: 3px;
          width: 133px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
          transform: scale3d(1, 0, 1);
          transition: all .3s ease-in-out;
          transform-origin: top;
          list-style: none;
          transform: scale3d(1, 1, 1);
          transition: all .3s ease-in-out;
          transform-origin: top;
     }
    .new-page-container .dropdown-menu li{
  padding:0 0!important;
}
.mb-3 label {
    text-transform: uppercase;
    padding-left: 2%;
}

#userContainer_list_length
{
   margin-top:-20px;
}
@media (min-width: 576px)
{
.modal-dialog {
     max-width: 600px;   
}
}
</style>
<body>
    <div class="page-hdr-wrpr">
        <div class="row">
            <div class="container-fluid">
                <h1 class="col-md-12 custom-page-header" id="page-header-container">
                    <span class="ti-angle-right pull-right"></span>
                    <span class="ti-angle-left pull-right"></span>
                </h1>
            </div>
        </div>
    </div>
    <div class="group-list">
        <div class="base_margin wrp-data-table">
            <div class="row">
                <div class="container-fluid">
                    <div class="panel panel-primary " style="margin:25px 0 2% 0;">
                        <div class="panel-heading custom-panel-heading pos-rel">
                            <h3 class="custom_panel_font panel-title" style="text-align: left;">Group List</h3>
                            <ul class="delt-create-icon-wrapper" style="width: 27%;">
                                <div id="createDeleteDiv">
																		<span class="bx bx-trash icon-delete pull-right delete-button ti-inactive disabled redOpacity" data-placement="right" title="Delete" style="font-size:1.5em;margin-right:5%"></span>
                                    <span class="bx bx-plus-circle icon-create pull-right create-button" data-placement="right" title="Create" data-original-title="Create New" style="font-size:1.5em;margin-right:5%;"></span>
																	 
                                </div> 
                                </div>
                            </ul>
                        </div>
                        <div class="nanobi-panel panel-body table-md-height" id="Default">
                            <div class="nanobi-panel panel-body table-md-height" style="margin-top:-50px;">
                                <input style="width: 200px; position: absolute;right: 26px;" type="text" class="form-control" id="searchAppUser" aria-controls="userContainer_list" placeholder="Search">
                            </div>
                            <table id="userContainer_list" class="table table-striped table-hover" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Group Name</th>
                                        <th class="no-sort" aria-sort="none" data-orderable="false" style="background: none;cursor: default;text-align: center;">Users</th>
                                        <th class="no-sort" aria-sort="none" data-orderable="false" style="background: none;cursor: default;text-align: center;">Apps</th>
                                        <th>Created Info</th>
                                        <th>Updated Info</th>
                                        <th class="no-sort" aria-sort="none" data-orderable="false" style="background: none;cursor: default; cursor:default;text-align:center;">Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="group-list-tbody">
                                    <script id="createdGroupsList" type="text/x-handlebars-template">
                                        {{#each this}}
                                                <tr row_id="{{row_id}}">
                                                    <td>
                                                     <label class="ui-checkbox">
                                                       <span style="top: 3px;" class="checkbox checkbox-success">
                                                        <input id="{{row_id}}" type="checkbox" class="list-check-box" {{disabled}}="{{disabledVal}}" name="chkbox" value="splice2">
                                                          <label style="padding-left:4px;"for="{{row_id}}">{{nameOfGroup}}</label>
                                                        
                                                       </span>
                                                       </label>
                                                     </label>
                                                    </td>
                                                    <td style="text-align: center;width: 8%;">
                                                       <span class="badge {{usersMapped}} roundBox usersListCol" row_id="{{row_id}}" style="cursor: default; margin-right:10px;" data-placement="right" data-bs-toggle="popover">
                                                       </span>
                                                    </td>
                                                    <td style="text-align: center;width: 8%;">
                                                       <span class="badge {{isappsMapped}} roundBox appsListCol" row_id="{{row_id}}" style="margin-right:10px;cursor: default;" data-placement="right" data-bs-toggle="popover">
                                                       </span>
                                                    </td>
                                                    <td style="vertical-align:middle;">{{created}} <br> {{created_by}}</td>
                                                    <td style="vertical-align:middle;">{{updated}} <br> {{updated_by}}</td>
                                                  
                                                    <td style="text-align: center;">
																											<span class="bx bx-group bx-sm fnt AddRemoveUser" onclick=" loadusersforGroup.loadusersforGroupList('{{row_id}}','{{nameOfGroup}}',true,this)" style="cursor:pointer;line-height:31px;margin-right:10px;"></span>
																													 
																											<span class="bx bx-lock-open bx-sm fnt app-access" onclick="loadusersforGroup.app_accessGroup('{{row_id}}',true,'{{nameOfGroup}}');" style="line-height: 31px;margin-left: 3px;margin-right: 10px;"></span>
																											<span class="bx {{editOrView}} bx-sm fnt editGroup" row_id="{{row_id}}" style="line-height: 31px;margin-left: 3px;"></span>
                                                    </td>
                                                </tr>
                                            {{/each}}
                                        </script>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="forListLoading"></div>
    </div>
    <div class="create-group none">
        <div class="base_margin wrp-metro-divs none" id="measure-info-container">
            <div class="row">
                <div id="measureInfoContainer" class="container-fluid">
                    <script id="measure-info" type="text/x-handlebars-template">
                        {{#each this}}
                                <div class="col-md-4 col-sm-4 metro-description" style="padding-left:1%;">
                                    <h4><span>Measure Name :</span> {{measureName}}</h4>
                                    <h4><span>Created On</span>: {{createdDateTime}}</h4>
                                    <h4><span>Created By :</span> {{createdByUserName}}</h4>
                                </div>
                                <hr class="visible-xs-block">
                                <div class="col-md-offset-1 col-md-4 col-sm-4 metro-description" >
                                    <h4><span>Type :</span> <span class="badge badge-m">{{measureType}}</span></h4>
                                    <h4><span>Updated On</span>: {{updatedDateTime}}</h4>
                                    <h4><span>Updated By :</span> {{updatedByUserName}}</h4>
                                </div>
                            {{/each}}
                        </script>
                </div>
            </div>
        </div>
        <div class="base_margin wrp-data-table " style="margin-bottom:8%; margin-top:25px">
            <div class="row">
                <div class="container-fluid">
                    <div class="panel panel-primary ">
                        <div class="panel-heading custom-panel-heading">
														<span class="bx bx-left-arrow-circle icon-general" id="back-to-list" data-bs-placement="right" data-bs-toggle="tooltip" aria-label="Go back to list" data-bs-original-title="Go back to list" style="margin-top: -5px;"></span>
                            <h3 id="change-title" class="custom_panel_font panel-title" style="text-align: left;">Create</h3>
                        </div>
                        <div class="nanobi-panel panel-body create-user-grp" id="Default">
                            <form class="form-horizontal" role="form">
                                <fieldset>
                                    <div class="row mb-3">
                                        <label for="inputEmail3" class="col-sm-3 control-label" style="padding-left:13px;">Name<sup class="text-danger">*</sup></label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="Name of the group" id="groupname" style="margin-left:-10px;" required><span class="errorMsg1" style="color: rgb(255, 0, 0);"></span>
                                        </div>
                                    </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-3 control-label" style="font-weight:700">Description<sup class="text-danger">*</sup></label>
                            <div class="col-sm-9">
                                <textarea id="description" name="description" placeholder="Group description goes here" class="required valid form-control" style=" height:50px; width: 100%" required></textarea>
                                <div class="frm-cnt">
                                    <div class="errorMsg2"></div>
                                    <span id="charCount"> 254 more characters available.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-12">
                            <div class="text-right">
                                <button class="btn  btn-polymer-save createGroup" type="submit" id="createGroup" style="transition:all 0.6s ease-in;margin: 0px 1.2%; position: relative;-webkit-tap-highlight-color: rgba(0, 0, 0, 0)"> <b id="groupSubmit">SUBMIT </b></button>
                                <button class=" btn  btn-polymer-cancel" id="resetbtn" style="transition:all 0.6s ease-in;margin: 0px 1.2%;position: relative;-webkit-tap-highlight-color: rgba(0, 0, 0, 0)"> <b>Reset </b></button>
                            </div>
                        </div>
                    </div>
                    </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    <div aria-labelledby="myModalLabel" class="modal fade" id="addOrRemoveUser" role="dialog" tabindex="-1" aria-hidden="false" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button aria-label="Close" class="close" id="close-button" data-bs-dismiss="modal" style="opacity: 0.4;pointer-events:painted;" type="button"><span aria-hidden="true"><i class="fa fa-times-circle-o" aria-hidden="true" style="font-size: 23px;"></i></span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel"><i class="zmdi zmdi-share"></i> &nbsp;Select Users</h4>
                </div>
                <div class="modal-body no-hor-padding-modal-box">
                    <ul class="nav nav-tabs list-inline" role="tablist">
                        <li role="presentation" id="usersShared" tagged="user" class="nav-item">
                            <a aria-controls="profile" class="nav-link active " data-bs-toggle="tab" href="#" role="tab">&nbsp;User</a>
                        </li>
                        <li style="position: absolute;right: 15px;top: 6px;">
                            <input type="text" class="form-control" id="searchuserMapped" mode="userListSearch" placeholder="Search user">
                        </li>
                    </ul>
                    <form class="form-horizontal">
                        <fieldset>
                            <div class="row  mb-3">
                                <div class="well well-white" style="width:550px;">
                                    <ul class="list-inline list-unstyled" id="userContainer" tag="user">
                                    </ul>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="addOrRemoveUserSubmit" disabled='disabled' class="btn btn-primary" type="button">DONE</button>
                </div>
            </div>
        </div>
    </div>
    <div aria-labelledby="myModalLabel" class="modal fade" id="app_access_modelBox" role="dialog" tabindex="-1" aria-hidden="false" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog" role="document" style="width:1000px;">
            <div class="modal-content">
                <div class="modal-header">
                    <button aria-label="Close" class="close" id="closeApp" data-bs-dismiss="modal" type="button"><span aria-hidden="true"><i class="fa fa-times-circle-o" aria-hidden="true" style="font-size: 23px;"></i></span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel"><i class="zmdi zmdi-share"></i> &nbsp;Select Apps</h4>
                </div>
                <div class="modal-body no-hor-padding-modal-box">
                    <ul class="nav nav-tabs list-inline" role="tablist">
                        <li role="presentation" class="nav-item" id="usersShared" tagged="user">
                            <a aria-controls="profile" class="nav-link active" data-bs-toggle="tab" href="#" role="tab">&nbsp;Apps</a>
                        </li>
                        <li style="position: absolute;right: 15px;top: 6px;">
                            <input type="text" class="form-control" id="searchAppMapped" mode="appListSearch" placeholder="Search user">
                        </li>
                    </ul>
                    <form class="form-horizontal">
                        <fieldset>
                            <div class="row  mb-3">
                                <div class="well well-white" style="width:950px;">
                                    <ul class="list-inline list-unstyled" id="appContainer" tag="user">
                                    </ul>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="appAccessSubmit" class="btn btn-primary" disabled='disabled' type="button">DONE</button>
                </div>
            </div>
        </div>
    </div>
    <%-- LDP 3091 - Library Upgrade --%>
    <script src="/NanoClientApplication/js/vendor/jquery/jquery.min.js"></script>
    <%-- LDP 3091 - Library Upgrade --%>
    <script src="/NanoClientApplication/js/vendor/ggtooltip.js"></script>
    <script src="/NanoClientApplication/js/vendor/jquery/jquery.mousewheel.min.js"></script>
    <script src="/NanoClientApplication/js/vendor/jquery/jquery.mcustomscrollbar.concat.min.js"></script>
    <script src="/NanoClientApplication/js/vendor/jquery/jquerylibo.js" type="text/javascript"></script>
    <script src="/NanoClientApplication/js/vendor/bootstrap/bootstrap.min.js"></script>
    <%-- LDP 3091 - Library Upgrade --%>
    <script src="/NanoClientApplication/js/vendor/handlebars.js"></script>
    <%-- LDP 3091 - Library Upgrade --%>
    <script type="text/javascript" src="/NanoClientApplication/js/accessmanagement/groupmanagement.js"></script>
    <script src="/NanoClientApplication/js/common/commonutilities.js" type="text/javascript"></script>
    <script type="text/javascript" src="/NanoClientApplication/js/common/common.js"></script>
    <%-- LDP 3091 - Library Upgrade --%>
    <script src="/NanoClientApplication/js/vendor/jquery/jquery-ui.js"></script>
    <%-- LDP 3091 - Library Upgrade --%>
    <script src="/NanoClientApplication/js/vendor/jquery/jquery.amaran.min.js"></script>
    <script src="/NanoClientApplication/js/vendor/datatables/jquery.datatables.js"></script>
    <script src="/NanoClientApplication/js/vendor/datatables/datatables.bootstrap.js"></script>
    <script src="/NanoClientApplication/js/vendor/wow.js"></script>
    <script src="/NanoClientApplication/js/vendor/sweet-alert.js"></script>
    <script src="/NanoClientApplication/js/vendor/jquery/jquery.alphanum.js"></script>
    <script src="/NanoClientApplication/js/vendor/jquery/jquery.mcustomscrollbar.concat.min.js"></script>
    <script src="/NanoClientApplication/js/vendor/intltelinput.min.js"></script>
    <script type="text/javascript">
    </script>
    <script>
    // RESET_ADMIN_ENDS
    </script>
    <script>
    $(document).ready(function() {
        $('.dropdown-menu input, .dropdown-menu label').click(function(e) {
            e.stopPropagation();
        })
    });

    ! function($) {
        // Le left-menu sign
        $(document).on("click", "#left ul.nav li.parent > a > span.sign", function() {
            $(this).find('i.fa:first').toggleClass("fa-minus");
        });

        // Open Le current menu
        $("#left ul.nav li.parent.active > a > span.sign").find('i.fa:first').addClass("fa-plus");
        $("#left ul.nav li.current").parents('ul.children').addClass("in");

    }(window.jQuery);
    // for datatable

    // for scrollbar 
    $(document).ready(function() {
        $('.dataTables_scrollBody ').css('overflow', 'hidden');
        //for table
        $('div.dataTables_filter label>input').removeClass('input-sm');
        $('.dataTables_wrapper label>select').removeClass('input-sm');
    });
    </script>
</body>

</html>
