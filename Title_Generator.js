//function returns horror movie title based on birthdate
const horrorMovieTitle = (birthMonth, birthDay, birthYear) => {
    let title = "";

    //assigns first part of movie title to birthMonth
        switch (birthMonth) {
            case "January":
                title += "Return of the ";
                break;
            case "February":
                title += "Rise of the ";
                break;
            case "March":
                title += "Invasion of the ";
                break;
            case "April":
                title += "Planet of the ";
                break;
            case "May":
                title += "Nightmare of the ";
                break;
            case "June":
                title += "Escape from the ";
                break;
            case "July":
                title += "Attack of the ";
                break;
            case "August":
                title += "Haunting of the ";
                break;
            case "September":
                title += "Revenge of the ";
                break;
            case "October":
                title += "Night of the ";
                break;
            case "November":
                title += "Silence of the ";
                break;
            case "December":
                title += "House of the ";
                break;
            default:
                return "Please enter a valid month . . . . . . . . . if you dare!!";
        };
    
    //assigns second part of movie title to birthDay
        if (birthDay <= 5) {
            title += "Deadly ";
        } else if (birthDay <= 10) {
            title += "Evil ";
        } else if (birthDay <= 15) {
            title += "Killer ";
        } else if (birthDay <= 20) {
            title += "Undead ";
        } else if (birthDay <= 25) {
            title += "Giant ";
        } else if (birthDay <= 31) {
            title += "Bloody";
        } else {
            return "Please enter a valid day . . . . . . . . . if you dare!!";
        }

    //assigns third part of movie title to birthYear
        if (birthYear <= 1940) {
            title += "Witch";
        } else if (birthYear <= 1950) {
            title += "Blob";
        } else if (birthYear <= 1960) {
            title += "Clown";
        } else if (birthYear <= 1970) {
            title += "Mummy";
        } else if (birthYear <= 1980) {
            title += "Zombie";
        } else if (birthYear <= 1990) {
            title += "Werewolf";
        } else if (birthYear <= 2000) {
            title += "Phantom";
        } else if (birthYear <= 2010) {
            title += "Vampire";
        } else if (birthYear <= 2020) {
            title += "Demon";
        } else {
            return "Please enter a valid year . . . . . . . . . if you dare!!";
        }
    
    return title;
};

//example: console.log(horrorMovieTitle("December", 8, 2018));

