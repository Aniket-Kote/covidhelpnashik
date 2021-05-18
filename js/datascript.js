function get_DCHC(){
    var dchc_table_data=document.getElementById('dchc_table_data');
    dchc_table_data.style.display='';

    $.getJSON('database/data/dchc.json',function(data){
        console.log("DCHC Hospitals in NAshik :"+data[2]['data'].length);

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
            dchc_body.rows[i].cells[4].innerHTML=data[2]['data'][i]['address'];
            dchc_body.rows[i].cells[4].style.backgroundColor='#F88BE7';

             dchc.insertCell(5);
            dchc_body.rows[i].cells[5].innerHTML=data[2]['data'][i]['dr_name'];
            dchc_body.rows[i].cells[5].style.backgroundColor='#B08BF8';

            
           
            // dchc.insertCell(6);
            // dchc_body.rows[i].cells[6].innerHTML=data[2]['data'][i]['type_hospital'];
            // dchc_body.rows[i].cells[6].style.backgroundColor='#8BBEF8';


            
            
        }
    })
}


function get_CCC(){
    var ccc_table_data=document.getElementById('ccc_table_data');
    ccc_table_data.style.display='';

    $.getJSON('database/data/ccc.json',function(data){
        console.log("CCC hospitals in Nashik :"+data[2]['data'].length);

        for(var i=0;i<data[2]['data'].length;i++){
            var ccc=ccc_body.insertRow();

            ccc.insertCell(0);
            ccc_body.rows[i].cells[0].innerHTML=i+1;   

            
            ccc.insertCell(1);
            if(data[2]['data'][i]['google_location']!=""){
                   ccc_body.rows[i].cells[1].innerHTML=data[2]['data'][i]['name']+
            '<br><a target="_blank" href='+data[2]['data'][i]['google_location']+'>Click to get location</a>';
            ccc_body.rows[i].cells[1].style.backgroundColor='#8BF8D1';
            }
            else if(data[2]['data'][i]['google_location']==""){
                ccc_body.rows[i].cells[1].innerHTML=data[2]['data'][i]['name']+
                '<br><p style="color:red">Location Not available</p>';
                ccc_body.rows[i].cells[1].style.backgroundColor='#8BF8D1';
                
            }
         
            
            ccc.insertCell(2);
            ccc_body.rows[i].cells[2].innerHTML=data[2]['data'][i]['hospital_landline'];
            ccc_body.rows[i].cells[2].style.backgroundColor='#F89B8B';

            ccc.insertCell(3);
            ccc_body.rows[i].cells[3].innerHTML=data[2]['data'][i]['hospital_contact'];
            ccc_body.rows[i].cells[3].style.backgroundColor='#F88B98';

            ccc.insertCell(4);
            ccc_body.rows[i].cells[4].innerHTML=data[2]['data'][i]['address'];
            ccc_body.rows[i].cells[4].style.backgroundColor='#F88BE7';

            
            ccc.insertCell(5);
            ccc_body.rows[i].cells[5].innerHTML=data[2]['data'][i]['dr_name'];
            ccc_body.rows[i].cells[5].style.backgroundColor='#B08BF8';

            // ccc.insertCell(6);
            // ccc_body.rows[i].cells[6].innerHTML=data[2]['data'][i]['type_hospital'];
            // ccc_body.rows[i].cells[6].style.backgroundColor='#8BBEF8';

           
            
        }
    })
}


function get_DCH(){
    var dch_table_data=document.getElementById('dch_table_data');
    dch_table_data.style.display='';

    $.getJSON('database/data/dch.json',function(data){
        console.log("DCH hospitals in Nashik :"+data[2]['data'].length);

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

            // dch.insertCell(6);
            // dch_body.rows[i].cells[6].innerHTML=data[2]['data'][i]['type_hospital'];
            // dch_body.rows[i].cells[6].style.backgroundColor='#8BBEF8';

           
            
            
            
        }
    })
}


var preload=document.getElementById('loading');
function load_body(){
    document.getElementById('loading').style.display="none";
    
}
 

function get_all_data(){
    load_body();
    get_CCC();   
    get_DCH();  
    get_DCHC();
    
}


function fetch_data(){
    $.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true",function(data){
        $('#activeCases').html(" "+data['activeCases']);        
        $('#recovered').html(" "+data['recovered']);       
        $('#deaths').html(" "+data['deaths']);      
        $('#totalCases').html(" "+data['totalCases']);
        console.log(data['regionData'].length)

        for(var i=1;i<data['regionData'].length;i++)
        {
            var x=statewise_data.insertRow()

            x.insertCell(0)
            statewise_data.rows[i].cells[0].innerHTML=i
            statewise_data.rows[i].cells[0].style.backgroundColor="#fff"

            x.insertCell(1)
            statewise_data.rows[i].cells[1].innerHTML=data['regionData'][i-1]['region']
            statewise_data.rows[i].cells[1].style.backgroundColor="#4bb7d8"

            x.insertCell(2)
            statewise_data.rows[i].cells[2].innerHTML=data['regionData'][i-1]['totalInfected']
            statewise_data.rows[i].cells[2].style.backgroundColor="#f36e23"

            x.insertCell(3)
            statewise_data.rows[i].cells[3].innerHTML=data['regionData'][i-1]['recovered']
            statewise_data.rows[i].cells[3].style.backgroundColor="#4bb7d8"

            x.insertCell(4)
            statewise_data.rows[i].cells[4].innerHTML=data['regionData'][i-1]['deceased']
            statewise_data.rows[i].cells[4].style.backgroundColor="#f36e23"
        }




    })
    load_body();
}


states_india=document.getElementById('states_india');
cities_india=document.getElementById('cities_india');
show=document.getElementById('show');
show1=document.getElementById('show1');

           var states="";
           var cities="";









function states_state(){
    $.getJSON('database/data/states.json',function(data1){
            
                    for(var i=0;i<data1.length;i++)                    
                    {
                        option=document.createElement("option");   
                        option.text=data1[i]['name'];
                        // states+="<option value="+data1[i]['name']+">"+data1[i]['name']+"</option>";
                        // states_india.innerHTML=states;
                        states_india.add(option);
                        
                        
                        
                    }
                
            
    })
}

