

    $("#searchInput").keyup(function () {
        //split the current value of searchInput
        var data = this.value.split(" ");
        //create a jquery object of the rows
        var jo = $("#fbody").find("tr");
        if (this.value == "") {
            jo.show();
            return;
        }
        //hide all the rows
        jo.hide();

        //Recusively filter the jquery object to get results.
        jo.filter(function (i, v) {
            var $t = $(this);
            for (var d = 0; d < data.length; ++d) {
                if ($t.is(":contains('" + data[d] + "')")) {
                    return true;
                }
            }
            return false;
        })
        //show the rows that match.
        .show();
    })
    
    $(document).ready(function(){
        $("#button3").click(function(){
            $.get("https://jsonplaceholder.typicode.com/posts/",{format:"json"},function(data){
        $.each(data,function(index,val){
        $("#r").append("<tr><th>"+val.id+"</th>"+"<th>"+val.title+"</th><td>"+val.body+"</td><td><button>Edit</button></td><td><button id=remove>Remove</button></td></tr>");
        })
            });
        });
      $("#remove").click(function(){
           $(this).parent('tr').remove();
        });
    });




                  $(document).ready(function() {
                      $('#button1').click(function() {
                          if(confirm("Do you want to delete this entire Table?")) {
          this.click;
             $('#r').remove();
         }
         else
         {
             alert("Canceled");
         }

                      });


                  });
