function updateListItemInList()  
{  
    $.ajax({  
        url: restUrl,
        type: "POST",  
        data: JSON.stringify  
        ({  
            __metadata:  
            {  
                type: "SP.Data.SpListCRUDListItem"  
            },  
            Title: ‘Some Value’  
        }),  
        headers:  
        {  
            "Accept": "application/json;odata=verbose",  
            "Content-Type": "application/json;odata=verbose",  
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
            "IF-MATCH": "*",  
            "X-HTTP-Method": "MERGE"  
        },  
        success: function(data)  
        {  
            console.log(data);  
        },  
        error: function(error)  
        {  
            console.log(JSON.stringify(error));  
        }  
    });
}

url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Your List Name')/items(Your record ID)",  
type: "POST",  
headers: {  
    "accept": "application/json;odata=verbose",  
    "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
    "content-Type": "application/json;odata=verbose",  
    "IF-MATCH": "*",  
    "X-HTTP-Method": "MERGE"  
},  
data: "{__metadata:{'type':'SP.Data.YourlistnameListItem'},Title:"  
Ur new input "}",  
/*where Title is column name and add your desired new data*/  
success: function(data) {  
    console.log(data.d.results);  
},  
error: function(error) {  
    alert(JSON.stringify(error));  
}  
});  