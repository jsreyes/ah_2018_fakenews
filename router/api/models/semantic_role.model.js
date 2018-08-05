'use strict'

var semantic_role = {
    subject : {
        text: String
    },    sentence: String,
    object: {
      text: String,  
    },
    action: {
        text:String,
        normalized: String,
        verb:{
            text:String,
            tense:String
        }
    }
}

module.exports = semantic_role;