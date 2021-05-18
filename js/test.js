table_name="";
function create_table(table_name)
{
    $.getJSON('database/data/'+ table_name +'.json',function(data){
        console.log(data[2]['data'].length);

        for(var i=0;i<data[2]['data'].length;i++){
            table_name+"=ccc_body.insertRow()";

            table_name+".insertCell(0)";
            table_name+"_body.rows[i].cells[0].innerHTML=i+1";   

            
            table_name+".insertCell(1)";
            if(data[2]['data'][i]['google_location']!=""){
                   table_name+"_body.rows[i].cells[1].innerHTML=data[2]['data'][i]['name']"+
            '<br><a target="_blank" href='+data[2]['data'][i]['google_location']+'>Click to get location</a>';
            table_name+"_body.rows[i].cells[1].style.backgroundColor='#8BF8D1'";
            }
            else if(data[2]['data'][i]['google_location']==""){
                table_name+"_body.rows[i].cells[1].innerHTML=data[2]['data'][i]['name']"+
                '<br><p style="color:red">Location Not available</p>';
                table_name+"_body.rows[i].cells[1].style.backgroundColor='#8BF8D1'";
                
            }
         
            
            table_name+".insertCell(2)";
            table_name+"_body.rows[i].cells[2].innerHTML=data[2]['data'][i]['hospital_landline']";
            table_name+"_body.rows[i].cells[2].style.backgroundColor='#F89B8B'";

            table_name+".insertCell(3)";
            table_name+"_body.rows[i].cells[3].innerHTML=data[2]['data'][i]['hospital_contact']";
            table_name+"_body.rows[i].cells[3].style.backgroundColor='#F88B98'";

            table_name+".insertCell(4)";
            table_name+"_body.rows[i].cells[4].innerHTML=data[2]['data'][i]['address']";
            table_name+"_body.rows[i].cells[4].style.backgroundColor='#F88BE7'";

            
            table_name+".insertCell(5)";
            table_name+"_body.rows[i].cells[5].innerHTML=data[2]['data'][i]['dr_name']";
            table_name+"_body.rows[i].cells[5].style.backgroundColor='#B08BF8'";

            table_name+".insertCell(6)";
            table_name+"_body.rows[i].cells[6].innerHTML=data[2]['data'][i]['type_hospital']";
            table_name+"_body.rows[i].cells[6].style.backgroundColor='#8BBEF8'";

           
            
        }
    })
}


function get_CCC(){
    var ccc_table_data=document.getElementById('ccc_table_data');
    ccc_table_data.style.display='';
var table2='ccc';
    create_table(table2);

}



function get_DCHC(){
    var dchc_table_data=document.getElementById('dchc_table_data');
    dchc_table_data.style.display='';

    $.getJSON('database/data/dchc.json',function(data){
        console.log(data[2]['data'].length);

        for(var i=0;i<data[2]['data'].length;i++){
            var dchc=dchc_body.insertRow();

            dchc.insertCell(0);
            dchc_body.rows[i].cells[0].innerHTML=i+1;   

            
            dchc.insertCell(1);
            if(data[2]['data'][i]['google_location']!=""){
                   dchc_body.rows[i].cells[1].innerHTML=data[2]['data'][i]['name']+
            '<br><a target="_blank" href='+data[2]['data'][i]['google_location']+'>Click to get location</a>';
            dchc_body.rows[i].cells[1].style.backgroundColor='#8BF8D1';
            }
            else if(data[2]['data'][i]['google_location']==""){
                dchc_body.rows[i].cells[1].innerHTML=data[2]['data'][i]['name']+
                '<br><p style="color:red">Location Not available</p>';
                dchc_body.rows[i].cells[1].style.backgroundColor='#8BF8D1';
                
            }
         
            dchc.insertCell(2);
            dchc_body.rows[i].cells[2].innerHTML=data[2]['data'][i]['hospital_landline'];
            dchc_body.rows[i].cells[2].style.backgroundColor='#F89B8B';

            dchc.insertCell(3);
            dchc_body.rows[i].cells[3].innerHTML=data[2]['data'][i]['hospital_contact'];
            dchc_body.rows[i].cells[3].style.backgroundColor='#F88B98';

             dchc.insertCell(4);
            dchc_body.rows[i].cells[4].innerHTML=data[2]['data'][i]['dr_name'];
            dchc_body.rows[i].cells[4].style.backgroundColor='#B08BF8';

            
           
            dchc.insertCell(5);
            dchc_body.rows[i].cells[5].innerHTML=data[2]['data'][i]['address'];
            dchc_body.rows[i].cells[5].style.backgroundColor='#F88BE7';

            dchc.insertCell(6);
            dchc_body.rows[i].cells[6].innerHTML=data[2]['data'][i]['type_hospital'];
            dchc_body.rows[i].cells[6].style.backgroundColor='#8BBEF8';


            
            
        }
    })
}

function get_DCH(){
    var dch_table_data=document.getElementById('dch_table_data');
    dch_table_data.style.display='';

    $.getJSON('database/data/dch.json',function(data){
        console.log(data[2]['data'].length);

        for(var i=0;i<data[2]['data'].length;i++){
            var dch=dch_body.insertRow();

            dch.insertCell(0);
            dch_body.rows[i].cells[0].innerHTML=i+1;   

            
            
            dch.insertCell(1);
            if(data[2]['data'][i]['google_location']!=""){
                   dch_body.rows[i].cells[1].innerHTML=data[2]['data'][i]['name']+
            '<br><a target="_blank" href='+data[2]['data'][i]['google_location']+'>Click to get location</a>';
            dch_body.rows[i].cells[1].style.backgroundColor='#8BF8D1';
            }
            else if(data[2]['data'][i]['google_location']==""){
                dch_body.rows[i].cells[1].innerHTML=data[2]['data'][i]['name']+
                '<br><p style="color:red">Location Not available</p>';
                dch_body.rows[i].cells[1].style.backgroundColor='#8BF8D1';
                
            }
         
            dch.insertCell(2);
            dch_body.rows[i].cells[2].innerHTML=data[2]['data'][i]['hospital_landline'];
            dch_body.rows[i].cells[2].style.backgroundColor='#F89B8B';

            dch.insertCell(3);
            dch_body.rows[i].cells[3].innerHTML=data[2]['data'][i]['hospital_contact'];
            dch_body.rows[i].cells[3].style.backgroundColor='#F88B98';

            dch.insertCell(4);
            dch_body.rows[i].cells[4].innerHTML=data[2]['data'][i]['address'];
            dch_body.rows[i].cells[4].style.backgroundColor='#F88BE7';

            
            dch.insertCell(5);
            dch_body.rows[i].cells[5].innerHTML=data[2]['data'][i]['dr_name'];
            dch_body.rows[i].cells[5].style.backgroundColor='#B08BF8';

            dch.insertCell(6);
            dch_body.rows[i].cells[6].innerHTML=data[2]['data'][i]['type_hospital'];
            dch_body.rows[i].cells[6].style.backgroundColor='#8BBEF8';

           
            
            
            
        }
    })
}

function get_all_data(){
    get_CCC();   
    get_DCH();  
    get_DCHC();
}


