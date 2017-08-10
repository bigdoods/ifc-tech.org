var options = {
  valueNames: [ 'name', 'link', 'desc' ]
};
var userList = new List('users', options);
$("#name").click(function(){ 
  userList.search("IFC viewer");
})
$("#name2").click(function(){ 
  userList.search("Express");
})
$("#name3").click(function(){ 
  userList.search("BIMserver");
})
$("#name4").click(function(){ 
  userList.search()
})