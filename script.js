/* Resume in JSON format
        
 var data =       [{
  "basics": {
    "name": "Veeramani kayathri",
    "label": "Support Engineer",   
    "email": "kayathrisivakumar@gmail.com",
    "phone": "9994746460",    
    "location": {
      "address": "49, krishnapuram",
      "postalCode": "624601",
      "city": "coimbatore",
      "country": "India",
      },

  "work": {
    "name": "Sitel India private limited",
    "position": "CSP",   
    "startDate": "2015-02-01",
    "endDate": "till now",
    },
  
  "education": [{
    "institution": "CIET",    
    "area": "ECE",
    "studyType": "Bachelor",
    "startYear": "2008",
    "endYear": "2012",
    "score": "9.0",    
  }],
  
   "skills": [{
    "name": "Web Development",
    "level": "Master",
    "keywords": [
      "HTML",
      "CSS",
      "JavaScript"
    ]
  }],
  "languages": [{
    "language": "English","Tamil",
    "fluency": "Native speaker"
  }],
  "interests": [{
    "name": "Wildlife",
    "keywords":[
      "carrom",
      "chess"    ]
  }],
  } 
}]*/

/*for(i=0;i<data.length;i++)
            {
              console.log(data[i])
            }

            // for of
            for(var obj of data){
             
              console.log(obj)
            }

            //for in loop

            for(var index in data){
              //  console.log(index)
                console.log(data[index])
            }

        }

      */

/* difference between document and windows

Document 	Window 
1.	It represents the document loaded inside the window or browser.	It represents the browser window in which you are seeing the content.
2.	The properties related to it are stored in the document object.	The properties related to it are stored in the window object.
3.	It is loaded after the loading window because the window contains a document.	It is loaded before the document because window container document.
4.	It is the root element of the document object model.	The window is the global element for all objects, functions, etc.
5.	It is an object of window.	It is an object of the browser.
6.	We can not access windows objects properties inside the document.	We can access document object properties inside the window.
7.	logically:
document:{ properties}	logically:
    window:{
        document:{properties}
    }
8.	Example: document.title will return the title of the document	Example: window.document.title will return the title of the document.

*/
