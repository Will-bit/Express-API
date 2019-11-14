$(document).ready(()=>{
    $('#theory').click(()=>{
 
$.ajax({
    url: 'api/',
    type: 'GET',
    dataType: 'json',
    success: (data)=> {
    console.log('ajax success!');
    
}
    
});
  });
});



