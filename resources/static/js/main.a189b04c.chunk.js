(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{778:function(e,t,n){},796:function(e,t,n){},797:function(e,t,n){"use strict";n.r(t);n(339),n(340);var a=n(20),o=n(21),r=n(22),s=n(23),c=n(338),i=n(1),l=n.n(i),d=n(15),u=n.n(d),p=n(76),h=n(19),b=n(18),m=n(74),j=n(10),g=n.n(j),f=n(6),O=n(97),x=n(81),y=n.n(x),C=[5,10,15,25,50],w="Select Collection Type",S="Name",v={SELECT:"Select",NAME:S,CREATEDBY:"Created by",LASTEDITED:"Last edited",CREATEDEDITED:"Created date"},T="EntKcToken",N="YYYY-MM-DD HH:mm:ss",k="".concat("http://localhost:1337"),P="".concat("http://localhost:8081/api","/template/"),R="".concat(k,"/content-manager/collection-types/api::"),I=function(){var e=Object(b.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat(k,"/content-manager/content-types"),E({},T));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(b.a)(g.a.mark((function e(t){var n,a,o,r,s,c=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:1,a=c.length>2&&void 0!==c[2]?c[2]:5,o="".concat(R).concat(t,".").concat(t,"?page=").concat(n,"&pageSize=").concat(a),e.next=5,y.a.get(o,E({},T));case 5:return r=e.sent,s=r.data,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(b.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(g.a.mark((function e(t,n,a){var o,r,s,c,i,l=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=l.length>3&&void 0!==l[3]?l[3]:1,r=l.length>4&&void 0!==l[4]?l[4]:5,t){e.next=4;break}throw new Error("collectionType is missing");case 4:return s="".concat(R).concat(t,".").concat(t,"?filters[").concat(a,"][$containsi]=").concat(n,"&page=").concat(o,"&pageSize=").concat(r),e.next=7,y.a.get(s,E({},T));case 7:return c=e.sent,i=c.data,e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),D=function(){var e=Object(b.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat(P));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e){var t=window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:localStorage.getItem("token");return console.log("ET-Widget-Config",t),t?{headers:{Authorization:"".concat(e," ").concat(t)}}:e===T?{headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUyNzg0MTQ5LCJleHAiOjE2NTUzNzYxNDl9.1wR8HywZYZg4lfdExuN8NqINoSE8bbHZBBnHLZyz6Ug")}}:{}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Bearer",n=A(t);return Object(O.a)(Object(O.a)({},e),n)},_=n(132),H=n(2),L=n.n(H),z=n(327),U=n(328),W=n(56),V=n(329),J=n(3),K=[],G=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;Object(a.a)(this,n),(o=t.call(this,e)).totalPages=function(){var e=o.state.pagination.perPage;return Math.ceil(K.length/e)},o.onPageInput=function(e){o.setState({pageChangeValue:e.target.value})},o.onSubmit=function(){o.setPage(o.state.pageChangeValue)},o.setPage=function(e){var t=Number(e);if(!Number.isNaN(e)&&""!==e&&t>0&&t<=o.totalPages()){var n=Object.assign({},o.state.pagination);n.page=t,o.setState({pagination:n,pageChangeValue:t})}},o.onPerPageSelect=function(e,t){var n=Object.assign({},o.state.pagination);n.perPage=e,n.page=1,o.setState({pagination:n})},o.onFirstPage=function(){o.setPage(1)},o.onPreviousPage=function(){o.state.pagination.page>1&&o.setPage(o.state.pagination.page-1)},o.onNextPage=function(){o.state.pagination.page<o.totalPages()&&o.setPage(o.state.pagination.page+1)},o.onLastPage=function(){var e=o.state.pagination.page,t=o.totalPages();e<t&&o.setPage(t)},o.onSelectRow=function(e,t){var a,r,s=o.props.onRowsLogger,c=o.state,i=c.rows,l=c.selectedRows,d=i.findIndex((function(e){return e.id===t.id}));d>-1&&(t.selected?(a=l.filter((function(e){return!(e===t.id)})),r=n.deselectRow(t)):(l.push(t.id),a=l,r=n.selectRow(t)),i[d]=r,o.setState({rows:i,selectedRows:a}),s(i.filter((function(e){return e.selected}))))},o.onSelectAllRows=function(e){var t=o.props.onRowsLogger,a=o.state,r=a.rows,s=a.selectedRows,c=e.target.checked,i=o.currentRows().rows;if(c){var l=Object(_.a)(new Set([].concat(Object(_.a)(i.map((function(e){return e.id}))),Object(_.a)(s)))),d=r.map((function(e){return l.indexOf(e.id)>-1?n.selectRow(e):e}));o.setState({rows:d,selectedRows:l}),t(d.filter((function(e){return e.selected})))}else{var u=i.map((function(e){return e.id})),p=s.filter((function(e){return!(u.indexOf(e)>-1)})),h=r.map((function(e){return p.indexOf(e.id)>-1?e:n.deselectRow(e)}));o.setState({rows:h,selectedRows:p}),t(h.filter((function(e){return e.selected})))}},o.onRow=function(e,t){t.rowIndex;o.props.setSelectedContent([e],o.props.selectedCollectionType);var n=K.indexOf(e.id)>-1;return{className:L()({selected:n}),role:"row"}};var r=function(){return o.state.sortingColumns||{}},s=W.sort({getSortingColumns:r,onSort:function(e){o.setState({sortingColumns:W.byColumn({sortingColumns:o.state.sortingColumns,sortingOrder:f.defaultSortingOrder,selectedColumn:e})})},strategy:W.strategies.byProperty}),c=W.header({sortableTransform:s,getSortingColumns:r,strategy:W.strategies.byProperty});return o.customHeaderFormatters=f.customHeaderFormattersDefinition,o.state={selectedContent:[],sortingColumns:{name:{direction:f.TABLE_SORT_DIRECTION.ASC,position:0}},columns:[{property:"select",displayName:"Select",header:{label:"select",props:{index:0,rowSpan:1,colSpan:1,id:"select"},transforms:[s],formatters:[c],customFormatters:[f.sortableHeaderCellFormatter]},cell:{props:{index:0},formatters:[function(e,t){var n=t.rowData,a=t.rowIndex;return Object(f.selectionCellFormatter)({rowData:n,rowIndex:a},o.onSelectRow,"vybrat ".concat(a),"vyberte \u0159\xe1dek ".concat(a))}]}},{property:"Title",displayName:"Names",header:{label:"Name",props:{index:1,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[f.sortableHeaderCellFormatter]},cell:{props:{index:1},formatters:[f.tableCellFormatter]}},{property:"createdBy",header:{label:"Created by",props:{index:2,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[f.sortableHeaderCellFormatter]},cell:{props:{index:2},formatters:[f.tableCellFormatter]}},{property:"updatedAt",header:{label:"Last edited",props:{index:3,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[f.sortableHeaderCellFormatter]},cell:{props:{index:3},formatters:[f.tableCellFormatter]}},{property:"Type",header:{label:"Type",props:{index:4,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[f.sortableHeaderCellFormatter]},cell:{props:{index:4},formatters:[f.tableCellFormatter]}},{property:"createdAt",header:{label:"Created date",props:{index:5,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[f.sortableHeaderCellFormatter]},cell:{props:{index:5},formatters:[f.tableCellFormatter]}},{property:"status",header:{label:"Status",props:{index:6,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[f.sortableHeaderCellFormatter]},cell:{props:{index:6},formatters:[f.tableCellFormatter]}}],rows:o.props.mockRows,selectedRows:[],pagination:{page:1,perPage:6,perPageOptions:[6,10,15]},pageChangeValue:1},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.mockRows&&this.setState({rows:this.props.mockRows})}},{key:"componentDidUpdate",value:function(e,t){this.props.mockRows!==e.mockRows&&this.setState({rows:this.props.mockRows})}},{key:"currentRows",value:function(){var e=this.state,t=e.rows,n=e.sortingColumns,a=e.columns,o=e.pagination;return Object(U.a)(Object(f.paginate)(o),W.sorter({columns:a,sortingColumns:n,sort:z.orderBy,strategy:W.strategies.byProperty}))(t)}},{key:"render",value:function(){var e=this,t=this.state,n=t.columns,a=t.pagination,o=t.sortingColumns,r=t.pageChangeValue,s=this.currentRows();return Object(J.jsxs)(f.Grid,{fluid:!0,children:[Object(J.jsxs)(f.Table.PfProvider,{striped:!0,bordered:!0,hover:!0,dataTable:!0,columns:n,components:{header:{cell:function(t){return e.customHeaderFormatters({cellProps:t,columns:n,sortingColumns:o,rows:s.rows,onSelectAllRows:e.onSelectAllRows})}}},children:[Object(J.jsx)(f.Table.Header,{headerRows:V.headerRows({columns:n})}),Object(J.jsx)(f.Table.Body,{rows:s.rows,rowKey:"id",onRow:this.onRow})]}),Object(J.jsx)(f.PaginationRow,{viewType:f.PAGINATION_VIEW.TABLE,pagination:a,pageInputValue:r,amountOfPages:s.amountOfPages,itemCount:s.itemCount,itemsStart:s.itemsStart,itemsEnd:s.itemsEnd,onPerPageSelect:this.onPerPageSelect,onFirstPage:this.onFirstPage,onPreviousPage:this.onPreviousPage,onPageInput:this.onPageInput,onNextPage:this.onNextPage,onLastPage:this.onLastPage,onSubmit:this.onSubmit})]})}}],[{key:"selectRow",value:function(e){return Object.assign({},e,{selected:!0})}},{key:"deselectRow",value:function(e){return Object.assign({},e,{selected:!1})}}]),n}(l.a.Component),Y=n(62),Q=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),o.props.runOnFilterData(o.state.values.name)},o.handleInputChange=function(e){o.setState({values:Object(Y.a)({},e.target.name,e.target.value)})},o.onClick=function(){o.setState({open:!o.state.open})},o.state={open:!1,values:{name:""}},o}return Object(o.a)(n,[{key:"handleKeyDown",value:function(){}},{key:"render",value:function(){return Object(J.jsx)("div",{className:"ContentsFilter well",role:"button",tabIndex:0,style:{margin:"1rem 0rem"},children:Object(J.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(J.jsxs)("div",{style:{display:"flex",margin:"1rem 0rem"},children:[Object(J.jsxs)("button",{id:"dropdown-example",role:"button","aria-haspopup":"true","aria-expanded":"false",type:"button",className:"dropdown-toggle btn btn-default",children:["Name ",Object(J.jsx)("span",{className:"caret"})]}),Object(J.jsx)("input",{type:"search",name:"name",value:this.state.values.name,onChange:this.handleInputChange,role:"combobox",className:"rbt-input-main form-control rbt-input",placeholder:"Search Content"})]}),Object(J.jsx)("div",{className:"pull-right mbt10",style:{margin:"0 0 10px 0"},children:Object(J.jsx)("button",{className:"btn btn-primary",children:"Search"})})]})})}}]),n}(l.a.Component),Z=(n(778),function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).runOnFilterData=function(){var e=Object(b.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(o.state.selectedCollectionType,t).then((function(e){var t=e.data.data.map((function(e){return e.attributes.id=e.id,e.attributes.createdBy="Admin",e.attributes.status="Published",e.attributes}));o.setState({mockRows:t})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.componentDidMount=function(){},o.close=function(){o.setState({show:!1})},o.open=Object(b.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.setState({show:!0}),e.next=3,I();case 3:t=(t=e.sent).data.data.filter((function(e){return e&&e.uid&&e.uid.startsWith("api::")&&e.isDisplayed})),n=[],t.length&&t.forEach((function(e){n.push(e.info)})),o.setState({collectionTypes:n});case 8:case"end":return e.stop()}}),e)}))),o.collectionTypeOnChange=function(e){e.persist(),o.state.collectionTypes.forEach(function(){var t=Object(b.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.singularName!==e.target.value||!e.target.value){t.next=4;break}return o.setState({selectedCollectionType:n.pluralName}),t.next=4,M(n.pluralName).then((function(e){var t=e.data.data.map((function(e){return e.attributes.id=e.id,e.attributes.createdBy="Admin",e.attributes.status="Published",e.attributes}));o.setState({mockRows:t})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},o.state={show:!1,collectionTypes:[],mockRows:[],selectedContent:[],selectedCollectionType:null},o}return Object(o.a)(n,[{key:"render",value:function(){return Object(J.jsx)(i.Fragment,{children:Object(J.jsx)("div",{children:Object(J.jsxs)(f.Modal,{dialogClassName:"ContentsFilterModal",show:this.state.show,onHide:this.close,children:[Object(J.jsxs)(f.Modal.Header,{children:[Object(J.jsx)("button",{className:"close",onClick:this.close,"aria-hidden":"true","aria-label":"Close",children:Object(J.jsx)(f.Icon,{type:"pf",name:"close"})}),Object(J.jsx)(f.Modal.Title,{children:"Select one content item"})]}),Object(J.jsxs)(f.Modal.Body,{children:[Object(J.jsx)("div",{className:"CollapsibleSection__title no-padding",role:"button",tabIndex:0}),Object(J.jsxs)(f.Row,{children:[Object(J.jsx)("label",{className:"control-label col-xs-3",htmlFor:"group",children:"Collection Type"}),Object(J.jsx)(f.Col,{xs:9,children:Object(J.jsxs)("select",{className:"form-control",name:"group","data-testid":"TEST_ID_USER_AUTHORITY_MODAL.GROUP_FIELD",onChange:this.collectionTypeOnChange,children:[Object(J.jsx)("option",{value:0,children:"Select Collection Type"}),this.state.collectionTypes.length&&this.state.collectionTypes.map((function(e,t){return Object(J.jsx)("option",{value:e.singularName,children:e.pluralName},e.singularName)}))]})})]}),Object(J.jsx)(Q,{runOnFilterData:this.runOnFilterData}),Object(J.jsx)(G,{onRowsLogger:function(){},mockRows:this.state.mockRows,selectedCollectionType:this.state.selectedCollectionType,setSelectedContent:this.props.setSelectedContent})]}),Object(J.jsxs)(f.Modal.Footer,{children:[Object(J.jsx)(f.Button,{bsStyle:"default",className:"btn-cancel",onClick:this.close,children:"Cancel"}),Object(J.jsx)(f.Button,{bsStyle:"primary",onClick:this.close,children:"Choose"})]})]})})})}}]),n}(i.Component)),q=n(79),X=n.n(q),$=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).renderToggleButton=function(e){e.isMenuShown;var t=e.onClick;return Object(J.jsx)("button",{type:"button",style:{position:"absolute",height:"100%",top:"0px",right:"0px",border:"1px solid lightgray"},onClick:function(e){e.preventDefault(),t(e)},children:Object(J.jsx)("span",{className:"fa fa-angle-down"})})},o.onChangeTemplateId=function(e){o.props.setTemplateId(e.target.value)},o.state={templateType:[{label:"vj"}],selectedTemplateType:[]},o}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)("table",{className:"table table-bordered table-datatable table-hover table-striped Contents__table-element",children:[Object(J.jsx)("thead",{children:Object(J.jsx)("tr",{children:Object.keys(ee).map((function(e,t){return Object(J.jsx)("th",{children:ee[e]},t)}))})}),Object(J.jsx)("tbody",{children:this.props.selectedContent.length>0&&this.props.selectedContent.map((function(t){return Object(J.jsxs)("tr",{children:[Object(J.jsx)("td",{children:t[Object.keys(t)[1]]}),Object(J.jsx)("td",{children:"".concat(t.createdBy.firstname," ").concat(t.createdBy.lastname)}),Object(J.jsx)("td",{children:X()(new Date(t.updatedAt)).format(N)}),Object(J.jsx)("td",{children:X()(new Date(t.publishedAt)).format(N)}),Object(J.jsx)("td",{children:Object(J.jsxs)("select",{name:"modelId",className:"form-control",onChange:e.onChangeTemplateId,children:[Object(J.jsx)("option",{value:"1",children:"Select Template"}),e.props.templateList.map((function(e){return Object(J.jsx)("option",{value:e.id,children:e.templateName},e.id)}))]})})]},t.id)}))})]})})}}]),n}(l.a.Component),ee={Title:"Name",createdAt:"Created by",updatedAt:"Last edited",createDate:"Created date",selectDefaultTemplate:"Select default template *"},te="".concat("http://localhost:1337"),ne=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).onChangeTemplateId=function(e){o.setState({selectedTemplateId:e.target.value})},o.setSelectedContent=function(e,t){o.setState({selectedContent:e}),o.setState({name:e}),o.setState({nameTwo:encodeURIComponent(JSON.stringify(e))}),o.setState({selectedContentId:e[0].id})},o.handleTypeaheadChangeContentType=function(e){var t=e.map((function(e){return e.label}));o.setState({templateList:t})},o.componentDidMount=Object(b.a)(g.a.mark((function e(){var t,n,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return t=(t=e.sent).data.filter((function(e){return e&&e.uid&&e.uid.startsWith("api::")&&e.isDisplayed})),n=[],t.length&&t.forEach((function(e){n.push({label:e.info.pluralName})})),e.next=8,D();case 8:a=e.sent,r=a.data,o.setState({templateList:r,collectionTypes:r});case 11:case"end":return e.stop()}}),e)}))),o.handleAddNewContent=function(){var e="".concat(te,"/admin/content-manager"),t=window.open(e,"_blank");t&&t.focus()},o.state={selectedContent:[],name:null,nameTwo:null,collectionTypes:[],selectedContentId:0,selectedTemplateId:"default",templateList:[]},o.handleAddNewContent=o.handleAddNewContent.bind(Object(m.a)(o)),o}return Object(o.a)(n,[{key:"render",value:function(){return Object(J.jsx)("form",{className:"form-horizontal SingleContentConfigForm well",children:Object(J.jsx)(f.Row,{children:Object(J.jsx)(f.Col,{xs:12,children:Object(J.jsx)("div",{children:Object(J.jsxs)("div",{children:[Object(J.jsx)("span",{className:"icon fa fa-puzzle-piece",title:"Widget"}),Object(J.jsx)("h5",{className:"SingleContentConfigFormBody__widgetTitle",children:"Content"}),Object(J.jsx)("div",{className:"SectionTitle SectionTitle__non-collapsable",role:"button",children:Object(J.jsx)("span",{children:"Info"})}),Object(J.jsxs)("div",{className:"row",children:[Object(J.jsx)(f.Col,{xs:6,children:Object(J.jsx)("h3",{className:"SingleContentConfigFormBody__contentTitle",children:"Content: -"})}),Object(J.jsxs)(f.Col,{xs:6,className:"SingleContentConfigFormBody__addButtons",children:[Object(J.jsx)(p.b,{to:"/configpage",children:Object(J.jsxs)(f.Button,{bsStyle:"primary",children:[this.props.selectedContent.length?"Edit":"Add existing"," content"]})}),Object(J.jsx)(f.Button,{className:"AddContentTypeFormBody__save--btn",bsStyle:"primary",onClick:this.handleAddNewContent,children:"Add new content"})]})]}),Object(J.jsx)(Z,{rightSide:!1,setSelectedContent:this.setSelectedContent}),Object(J.jsx)("div",{style:{marginTop:"1rem"}}),Object(J.jsx)($,{setTemplateId:this.props.setTemplateId,templateList:this.state.templateList,content:this.state.selectedContent,selectedContent:this.props.selectedContent})]})})})})})}}]),n}(i.Component),ae=n(332),oe=n(337),re=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).toggleTab=function(e){o.setState({activeTabKey:e})},o.constructContentDetailsForModal=function(){if(Object.keys(o.props.contentDetailsOnModal).length&&Object.keys(o.props.contentDetailsOnModal).indexOf("createdBy")){o.dataToShowOnModal=Object(O.a)({},o.props.contentDetailsOnModal);var e=o.dataToShowOnModal.createdBy,t=e.firstname,n=e.lastname,a=o.dataToShowOnModal.updatedBy,r=a.firstname,s=a.lastname,c=o.dataToShowOnModal,i=c.createdBy,l=c.updatedBy;i&&(o.dataToShowOnModal.createdBy="".concat(t," ").concat(n)),l&&(o.dataToShowOnModal.updatedBy="".concat(r," ").concat(s))}},o.renderElementByType=function(e){if(null!==o.dataToShowOnModal[e]&&void 0!==o.dataToShowOnModal[e]){if("boolean"===typeof o.dataToShowOnModal[e])return o.dataToShowOnModal[e]+"";if(Array.isArray(o.dataToShowOnModal[e])){if(o.dataToShowOnModal[e]&&o.dataToShowOnModal[e][0].ext)return o.dataToShowOnModal[e].map((function(e){return Object(J.jsx)("img",{src:"http://localhost:1337"+e.formats.thumbnail.url,height:"50px",width:"50px",alt:e.name})}))}else if("object"===typeof o.dataToShowOnModal[e])return o.dataToShowOnModal[e].ext&&"object"===typeof o.dataToShowOnModal[e]?Object(J.jsx)("img",{src:"http://localhost:1337"+o.dataToShowOnModal[e].formats.thumbnail.url,width:"50px",height:"50px",alt:o.dataToShowOnModal[e].name}):JSON.stringify(o.dataToShowOnModal[e]);return o.dataToShowOnModal[e]}},o.state={show:!0,collectionTypes:[],mockRows:[],selectedContent:[],selectedCollectionType:null,collectionAttributes:o.props.dummyData,activeTabKey:0},o.toggleTab=o.toggleTab.bind(Object(m.a)(o)),o.dataToShowOnModal={},o}return Object(o.a)(n,[{key:"render",value:function(){var e,t=this;return this.constructContentDetailsForModal(),Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)(f.Modal,{dialogClassName:"ContentsFilterModal",show:this.props.show,onHide:this.props.onHide,children:[Object(J.jsxs)(f.Modal.Header,{children:[Object(J.jsx)("button",{className:"close",onClick:this.props.onHide,"aria-hidden":"true","aria-label":"Close",children:Object(J.jsx)(f.Icon,{type:"pf",name:"close"})}),Object(J.jsx)(f.Modal.Title,{children:Object.keys(this.dataToShowOnModal).length>0&&this.dataToShowOnModal[Object.keys(this.dataToShowOnModal)[1]]})]}),Object(J.jsxs)(f.Modal.Body,{children:[Object(J.jsx)("div",{className:"CollapsibleSection__title no-padding",role:"button",tabIndex:0}),Object(J.jsx)("div",{children:Object(J.jsxs)(f.Tabs,{id:"id",activeKey:this.state.activeTabKey,onSelect:this.toggleTab,children:[Object(J.jsx)(f.Tab,{eventKey:0,title:"English",children:Object.keys(this.dataToShowOnModal).length>0&&Object.keys(this.dataToShowOnModal).filter((function(e){return n(e)})).map((function(e,n){return Object(J.jsx)("div",{className:"row",style:{marginBottom:"2rem",marginTop:"1rem"},children:Object(J.jsxs)("div",{className:"col-xs-12",children:[Object(J.jsx)(f.Col,{xs:2,children:Object(J.jsx)("strong",{children:e.charAt(0).toUpperCase()+e.slice(1)})}),Object(J.jsx)(f.Col,{xs:10,children:t.renderElementByType(e)})]})},n)}))}),Object(J.jsx)(f.Tab,{eventKey:1,title:"Italiano",children:Object.keys(this.dataToShowOnModal).length>0&&Object.keys(this.dataToShowOnModal).filter((function(e){return n(e)})).map((function(e,n){return Object(J.jsx)("div",{className:"row",style:{marginBottom:"2rem",marginTop:"1rem"},children:Object(J.jsxs)("div",{className:"col-xs-12",children:[Object(J.jsx)(f.Col,{xs:2,children:Object(J.jsx)("strong",{children:e.charAt(0).toUpperCase()+e.slice(1)})}),Object(J.jsx)(f.Col,{xs:10,children:t.renderElementByType(e)})]})},n)}))})]})})]}),Object(J.jsxs)(f.Modal.Footer,{children:[Object(J.jsx)(f.Button,{bsStyle:"default",className:"btn-cancel",onClick:this.props.onHide,children:"Close"}),Object(J.jsx)(f.Button,(e={bsStyle:"primary",onClick:this.close},Object(Y.a)(e,"onClick",this.props.onHide),Object(Y.a)(e,"children","Ok"),e))]})]})});function n(e){return!e.match("createdAt")&&!e.match("updatedAt")&&!e.match("publishedAt")&&!e.match("createdBy")&&!e.match("updatedBy")&&!e.match("id")}}}]),n}(i.Component),se=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).componentDidMount=Object(b.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.setCollectionTypeState();case 2:o.shouldShowEtSaveBtn("hidden");case 3:case"end":return e.stop()}}),e)}))),o.componentWillUnmount=function(){o.shouldShowEtSaveBtn("visible")},o.shouldShowEtSaveBtn=function(e){var t,n=Object(ae.a)(document.getElementsByClassName("pull-right save btn btn-primary"));try{for(n.s();!(t=n.n()).done;){t.value.style.visibility=e}}catch(a){n.e(a)}finally{n.f()}},o.componentDidUpdate=function(){var e=Object(b.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.selectedCollectionType===o.props.selectedCollectionType&&n.pageSize===o.state.pageSize||o.setState({page:1,pageInput:1,currPageWillUpdating:1},Object(b.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.getContentsByCollectionType(o.state.selectedCollectionType[0].value,o.state.page,o.state.pageSize);case 2:case"end":return e.stop()}}),e)})))),n.page===o.state.page){e.next=5;break}return o.setState({selectedContent:null}),e.next=5,o.getContentsByCollectionType(o.state.selectedCollectionType[0].value,o.state.page,o.state.pageSize);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o.filterUidByApiPrefix=function(e){return e.filter((function(e){return e.uid.startsWith("api::")}))},o.open=function(){var e=Object(b.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.setState({show:!0,contentDetailsOnModal:t});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.close=function(){o.setState({show:!1})},o.handleCollectionTypeChange=function(){var e=Object(b.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t[0],o.setState({selectedCollectionType:t}),!n||!n.value){e.next=8;break}return e.next=5,o.getContentsByCollectionType(n.value);case 5:o.props.setSelectedContentName(n.value),e.next=9;break;case 8:o.props.setSelectedContentName(null);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.getContentsByCollectionType=function(){var e=Object(b.a)(g.a.mark((function e(t,n,a){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(t,n,a);case 2:r=e.sent,o.setState({contents:r.results,lastPage:r.pagination.pageCount,page:r.pagination.page,pageSize:r.pagination.pageSize,totalItems:r.pagination.total,setSearchBy:r&&r.results.length&&Object.keys(r.results[0])[1]});case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),o.renderToggleButton=function(e){e.isMenuShown;var t=e.onClick;return Object(J.jsx)("button",{type:"button",style:{position:"absolute",height:"100%",top:"0px",right:"0px",border:"1px solid lightgray"},onClick:function(e){e.preventDefault(),t(e)},children:Object(J.jsx)("span",{className:"fa fa-angle-down"})})},o.setPage=function(e){var t=Number(e);if(!Number.isNaN(e)&&""!==e&&t>0&&t<=o.totalPages()){var n=Object.assign({},o.state.pagination);n.page=t,o.setState({pagination:n,pageChangeValue:t})}},o.onContentSearch=function(){var e=Object(b.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!o.state.searchQuery){e.next=8;break}return e.next=4,F(o.state.selectedCollectionType[0].value,o.state.searchQuery,o.state.setSearchBy,1,5);case 4:n=e.sent,o.setState({contents:n.results,lastPage:n.pagination.pageCount,page:n.pagination.page,pageSize:n.pagination.pageSize,totalItems:n.pagination.total}),e.next=9;break;case 8:o.getContentsByCollectionType(o.state.selectedCollectionType[0].label);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.handleQueryChange=function(e){e.preventDefault(),o.setState({searchQuery:e.target.value})},o.onPerPageSelect=function(e){o.setState({pageSize:e})},o.onPageInput=function(e){o.setState({currPageWillUpdating:e.target.value})},o.onSubmit=function(){+o.state.currPageWillUpdating&&o.state.currPageWillUpdating<=o.state.lastPage&&o.setState({page:+o.state.currPageWillUpdating})},o.state={page:1,currPageWillUpdating:1,pageSize:5,totalItems:20,lastPage:4,pageInput:1,pageChangeValue:1,show:!1,contentDetailsOnModal:{},searchQuery:"",setSearchBy:"",collectionType:[],selectedCollectionType:[],contents:[],selectedContent:null},o}return Object(o.a)(n,[{key:"setCollectionTypeState",value:function(){var e=Object(b.a)(g.a.mark((function e(){var t,n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,n=t.data,a=this.filterUidByApiPrefix(n),this.setState({collectionType:a.map((function(e){return{label:e.info.displayName,value:e.info.singularName}}))});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"changePage",value:function(e){this.setState({page:e,currPageWillUpdating:e})}},{key:"render",value:function(){var e=this,t={page:this.state.page,perPage:this.state.pageSize,perPageOptions:C},n=0===this.state.totalItems?0:(this.state.page-1)*this.state.pageSize+1,a=Math.min(this.state.page*this.state.pageSize,this.state.totalItems);return Object(J.jsxs)(f.Grid,{children:[Object(J.jsx)(f.Row,{className:"mt-2",children:Object(J.jsx)(f.Col,{lg:12,children:Object(J.jsx)("legend",{children:"Select Content"})})}),Object(J.jsx)(f.Row,{className:"mt-2",children:Object(J.jsx)(f.Col,{lg:3,children:Object(J.jsx)("h6",{children:Object(J.jsx)("b",{children:w})})})}),Object(J.jsx)(f.Row,{children:Object(J.jsx)(f.Col,{lg:3,children:Object(J.jsx)(oe.a,{id:"collectionTypeDropdown",placeholder:w,options:this.state.collectionType,onChange:this.handleCollectionTypeChange,selected:this.state.selectedCollectionType,children:function(t){var n=t.isMenuShown,a=t.toggleMenu;return e.renderToggleButton({isMenuShown:n,onClick:a})}})})}),Object.keys(this.state.selectedCollectionType).length>0&&Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(f.Row,{className:"mt-2",children:Object(J.jsx)(f.Col,{lg:3,children:Object(J.jsx)("h5",{style:{marginBottom:"0px"},children:Object(J.jsx)("strong",{children:"Article"})})})}),Object(J.jsx)(f.Row,{children:Object(J.jsx)(f.Col,{lg:12,children:Object(J.jsx)("div",{className:"ContentsFilter well",role:"button",tabIndex:0,style:{margin:"1rem 0rem"},children:Object(J.jsxs)("form",{children:[Object(J.jsxs)("div",{style:{display:"flex",margin:"1rem 0rem"},children:[Object(J.jsx)("button",{id:"dropdown-example",role:"button","aria-haspopup":"true","aria-expanded":"false",type:"button",className:"dropdown-toggle btn btn-default",children:S}),Object(J.jsx)("input",{type:"search",name:"name",onChange:this.handleQueryChange,role:"combobox",className:"rbt-input-main form-control rbt-input",placeholder:"Search Content By Name..."})]}),Object(J.jsx)("div",{className:"pull-right mbt10",style:{margin:"0 0 10px 0"},children:Object(J.jsx)("button",{className:"btn btn-primary",onClick:this.onContentSearch,children:"Search"})})]})})})}),Object(J.jsx)(f.Row,{className:"mt-2",children:Object(J.jsxs)(f.Col,{lg:12,children:[Object(J.jsxs)("table",{className:"table dataTable table-striped table-bordered table-hover",children:[Object(J.jsx)("thead",{children:Object(J.jsx)("tr",{children:Object.keys(v).map((function(e){return Object(J.jsx)("th",{children:v[e]},e)}))})}),Object(J.jsx)("tbody",{children:this.state.contents.map((function(t){return Object(J.jsxs)("tr",{className:"rowCursorPointer",children:[Object(J.jsx)("td",{width:"5%",align:"center",children:Object(J.jsx)("input",{onClick:function(){e.setState({selectedContent:t})},type:"radio",id:t+t.id,name:"content",value:t.id})}),Object(J.jsx)("td",{onClick:function(){return e.open(t)},children:t[Object.keys(t)[1]]}),Object(J.jsx)("td",{onClick:function(){return e.open(t)},children:"".concat(t.createdBy.firstname," ").concat(t.createdBy.lastname)}),Object(J.jsx)("td",{onClick:function(){return e.open(t)},children:X()(new Date(t.publishedAt)).format(N)}),Object(J.jsx)("td",{onClick:function(){return e.open(t)},children:X()(new Date(t.updatedAt)).format(N)})]},t.id)}))})]}),Object(J.jsx)("div",{className:"custom-page"}),Object(J.jsx)(f.PaginationRow,{itemCount:this.state.totalItems,itemsStart:n,itemsEnd:a,viewType:"table",pagination:t,amountOfPages:this.state.lastPage,pageInputValue:this.state.currPageWillUpdating,onPageSet:this.changePage,onPerPageSelect:this.onPerPageSelect,onFirstPage:function(){return e.changePage(1)},onPreviousPage:function(){return e.changePage(e.state.page-1)},onPageInput:this.onPageInput,onNextPage:function(){return e.changePage(e.state.page+1)},onLastPage:function(){return e.changePage(e.state.lastPage)},onSubmit:this.onSubmit})]})}),Object(J.jsxs)(f.Row,{className:"SingleContentConfigFormBody__actionBar row",children:[Object(J.jsx)(f.Col,{sm:9}),Object(J.jsx)(f.Col,{sm:3,className:"SingleContentConfigFormBody__addButtons",children:Object(J.jsxs)(p.b,{to:"/",children:[Object(J.jsx)("button",{className:"btn-default btn",children:"Cancel"}),Object(J.jsx)("button",{className:"btn-primary btn AddContentTypeFormBody__save--btn",onClick:function(){return e.props.setContent([e.state.selectedContent])},disabled:!this.state.selectedContent,children:"Save"})]})})]})]}),Object(J.jsx)(re,{show:this.state.show,onHide:this.close,contentDetailsOnModal:this.state.contentDetailsOnModal})]})}}]),n}(i.Component),ce=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).setContent=function(e){o.setState({selectedContent:e}),e.length&&o.setState({selectedContentId:e[0].id})},o.setSelectedContentName=function(e){o.setState({selectedContentName:e,name:e,nameTwo:e})},o.setTemplateId=function(e){o.setState({selectedTemplateId:e})},o.state={selectedContent:[],selectedContentId:0,selectedTemplateId:"default",selectedContentName:null,name:"vijayy",nameTwo:"nameTwoVar"},o}return Object(o.a)(n,[{key:"render",value:function(){return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)(p.a,{children:Object(J.jsxs)(h.c,{children:[Object(J.jsx)(h.a,{path:"/",exact:!0,children:Object(J.jsx)(ne,{selectedContent:this.state.selectedContent,setTemplateId:this.setTemplateId})}),Object(J.jsx)(h.a,{path:"/configpage",exact:!0,children:Object(J.jsx)(se,{setContent:this.setContent,setSelectedContentName:this.setSelectedContentName})})]})})})}}]),n}(i.Component),ie=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).reactRootRef=l.a.createRef(),e.mountPoint=null,e}return Object(o.a)(n,[{key:"config",get:function(){return console.log("GET CONFIG THIS.REACTROOTREF.CURRENT",this.reactRootRef.current),this.reactRootRef.current?this.reactRootRef.current.state:{}},set:function(e){return console.log("BALUE",e),console.log("SET CONFIG",this.reactRootRef.current),this.reactRootRef.current.setState(e)}},{key:"connectedCallback",value:function(){this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),u.a.render(Object(J.jsx)(ce,{ref:this.reactRootRef}),this.mountPoint)}}]),n}(Object(c.a)(HTMLElement));window.customElements.define("single-content-widget-config",ie);n(796)}},[[797,1,2]]]);
//# sourceMappingURL=main.a189b04c.chunk.js.map