function menuBuilder(items, parentId) {

  var content = '<ul>';

  if(parentId !== 0){
    content = '<ul ' + 'class=\'submenu\'' + '>';
  }

  for(var item in items) {
	var obj = items[item];

    if(!obj.parent){
        obj.parent = 0;
    }

    if (obj.parent === parentId) {
       content += '<li>' + obj.name + menuBuilder(items, obj.id) + '</li>';
    }
  }

   content += '</ul>';


   return content.replace(/<ul class=\'submenu\'><\/ul>/g, '');
}

export default menuBuilder;
