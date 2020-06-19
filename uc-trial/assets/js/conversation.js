var chatMessages = [
    {
        name: "ms1",
        msg: "👋Hello there! I got you sneaking into our LMS page. What can I do for you?",
        delay: 300,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.png"
    },
    {
        name: "ms2",
        msg: "please tell about your product,",
        delay: 3000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
    {
        name: "ms3",
        msg: "I am glad that I got you from getting lost;) <br> Can you be more specific? <br> Choose one of the following to know more in detail. <br> - Learning management system <br>- Virtual classroom   ",
        delay: 3000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.png"
    },
    {
        name: "ms4",
        msg: "Learning management system",
        delay: 2000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
    {
        name: "ms5",
        msg: "IN Learning management system we have  <br>- manage multiple courses<br>- online exams <br> -QUIZZES and more.",
        delay: 3000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.png"
    },
    {
        name: "ms6",
        msg: "Would you like to know more about pricing? <br> - We have different plans for our customers from different backgrounds. <br> -Please scroll down to get your right to pricing.",
        delay: 2000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.png"
    },
   
    {
        name: "ms7",
        msg: "What about Virtual classroom? ",
        delay: 2000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
    {
        name: "ms8",
        msg: "In Virtual classroom Our Online classrooms could be integrated with the LMS.",
        delay: 3000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.png"
    },
    
    {
        name: "ms9",
        msg: "Great, Thank You!❤️",
        delay: 4000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
      {
        name: "ms10",
        msg: "👋Hello there! I got you sneaking into our LMS page. What can I do for you?",
        delay: 300,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.png"
    },
    {
        name: "ms11",
        msg: "please tell about tour product,",
        delay: 3000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
    {
        name: "ms12",
        msg: "I am glad that I got you from getting lost;) <br> Can you be more specific? <br> Choose one of the following to know more in detail. <br> - Learning management system <br>- Virtual classroom   ",
        delay: 3000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.png"
    },
    {
        name: "ms13",
        msg: "Learning management system",
        delay: 2000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
    {
        name: "ms14",
        msg: "IN Learning management system we have  <br>- manage multiple courses<br>- online exams <br> -QUIZZES and more.",
        delay: 3000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.png"
    },
    {
        name: "ms15",
        msg: "Would you like to know more about pricing? <br> - We have different plans for our customers from different backgrounds. <br> -Please scroll down to get your right to pricing.",
        delay: 2000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.png"
    },
   
    {
        name: "ms16",
        msg: "What about Virtual classroom? ",
        delay: 2000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
    {
        name: "ms17",
        msg: "In Virtual classroom Our Online classrooms could be integrated with the LMS.",
        delay: 3000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.png"
    },
    
    {
        name: "ms18",
        msg: "Great, Thank You!❤️",
        delay: 4000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
   
];
var chatDelay = 0;

function onRowAdded() {
    $('.chat-container').animate({
        scrollTop: $('.chat-container').prop('scrollHeight')
    });
};
$.each(chatMessages, function(index, obj) {
    chatDelay = chatDelay + 1500;
    chatDelay2 = chatDelay + obj.delay;
    chatDelay3 = chatDelay2 + 10;
    scrollDelay = chatDelay;
    chatTimeString = " ";
    msgname = "." + obj.name;
    msginner = ".messageinner-" + obj.name;
    spinner = ".sp-" + obj.name;
    if (obj.showTime == true) {
        chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
    }
    $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><img src='" + obj.img +"'><span class='message-text'>" + obj.msg + chatTimeString + "</span></div></li>");

    $(msgname).delay(chatDelay).fadeIn();
    $(spinner).delay(chatDelay2).hide(1);
    $(msginner).delay(chatDelay3).fadeIn();
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;
});