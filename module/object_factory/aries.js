var skill = require("./skill.js"); // ingat !! harus ditampung ke dalam variabel

skill_obj = skill();
skill_obj.language = "PHP";

console.log("Aries bisa "+skill_obj.language);
