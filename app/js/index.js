$(document).ready(function() {


    function getDayAndTime() {

        var date = new Date();
        var week = [
            "Sunday", //week[0]
            "Monday", //week[1]
            "Tuesday", //week[2]
            "Wednesday", //week[3]
            "Thursday", //week[4]
            "Friday", //week[5]
            "Saturday" //week[6]
        ];

        var getTime = (function() {

            function checkTime(i) {
                return (i < 10) ? "0" + i : i;
            }

            var h = date.getHours();
            h = h > 12 ? h - 12 : h;

            var m = checkTime(date.getMinutes());
            var s = checkTime(date.getSeconds());
            var am_pm = date.getHours() >= 12 ? "PM " : "AM ";


            return "The current time is " + h + " " + am_pm + ":" + m + ":" + s;


        }());


        var t = setTimeout(getDayAndTime, 500);
        var message = "Today is " + week[date.getDay()] + ". " + getTime;
        document.getElementById('task1-Output').innerHTML = message;


    }


    var scrollString = (function() {

        var str = "Learning to Code Javascript Rocks!";
        var button = $("#task2");
        var output = $("#task2-Output");


        output.text(str);

        return function() {
            str = str.charAt(str.length - 1) + str.substring(0, str.length - 1);
            output.text(str);
            var t = setTimeout(scrollString, 200);

        }




    }());


    function sortArray() {
        var items = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
        var length = items.length;
        for (var i = 0; i < length - 1; i++) {

            var max = i;
            for (var j = i + 1; j < length; j++) {
                if (items[j] > items[max]) {
                    max = j;
                }
            }
            if (max != i) {

                var tmp = items[i];
                items[i] = items[max];
                items[max] = tmp;
            }
        }
        console.log(items);
    }

    function makeFirstWordBold() {




        $('#task4').siblings().html(function() {
                var text = $(this).text().split(' ');
                var first = text.shift();
                return (text.length > 0 ? '<span class="firstLetterBold">' + first + '</span> ' : first) + text.join(" ");
            }


        );
    }



    function appendOnClick(typeOfClick) {

        $('#task5Div').append('<p>This is a click event</p>');





    }

    function appendOnDoubleClick() {
        $('#task5Div').append('<p>This is a double click event</p>');
    }

    function clear() {
        $('#task5Click').siblings().remove();

    }

    function changeColor() {
        $('#task6').parent().css('background-color', 'lightblue');
    }

    $('#task1').on('click', getDayAndTime);
    $('#task2').on('click', scrollString);
    $('#task3').on('click', sortArray);
    $('#task4').on('click', makeFirstWordBold);
    $('#task5Click').on('click', appendOnClick);
    $('#task5Click').on('dblclick', appendOnDoubleClick);
    $('#clear').on('click', clear);
    $('#task6').on('click', changeColor);





});
