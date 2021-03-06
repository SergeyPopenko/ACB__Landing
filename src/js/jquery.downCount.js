(function ($) {

    $.fn.downCount = function (options, callback) {
        var settings = $.extend({
              date: null,
              offset: null
            }, options);

        if (!settings.date) {
            $.error('Date is not defined.');
        }

        if (!Date.parse(settings.date)) {
            $.error('Incorrect date format, it should look like this, 12/24/2012 12:00:00.');
        }

        // Save container
        var container = this;

        var currentDate = function () {
            var date = new Date();

            var utc = date.getTime() + (date.getTimezoneOffset() * 60000);

            var new_date = new Date(utc + (3600000*settings.offset))

            return new_date;
        };

        /**
         * Main downCount function that calculates everything
         */
        function countdown () {
            var target_date = new Date(settings.date), // set target date
                current_date = currentDate(); // get fixed current date

            // difference of dates
            var difference = target_date - current_date;

            // if difference is negative than it's pass the target date
            if (difference < 0) {
                // stop timer
                clearInterval(interval);

                if (callback && typeof callback === 'function') callback();

                return;
            }

            // basic math variables
            var _second = 1000,
                _minute = _second * 60,
                _hour = _minute * 60,
                _day = _hour * 24;

            // calculate dates
            var days = Math.floor(difference / _day),
                hours = Math.floor((difference % _day) / _hour),
                minutes = Math.floor((difference % _hour) / _minute),
                seconds = Math.floor((difference % _minute) / _second);

                // fix dates so that it will show two digets
                days = (String(days).length >= 2) ? days : '0' + days;
                hours = (String(hours).length >= 2) ? hours : '0' + hours;
                minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
                seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;

            // based on the date change the refrence wording
            if (days === 1 || days === 21 || days === 31 || days === 41) {
              var ref_days = "день";
            } else if (days > 1 && days < 5 || days > 21 && days < 25 || days > 31 && days < 35 || days > 41 && days < 45) {
              ref_days = "дня";
            } else {
              ref_days = "дней";
            }

            if (hours === 1 || hours === 21) {
              var ref_hours = "час";
            } else if (hours === 2 || hours === 3 || hours === 4 || hours === 22 || hours === 23 || hours === 24) {
              ref_hours = "часа";
            } else {
              ref_hours = "часов";
            }

            if (minutes === 1 || minutes === 21 || minutes === 31 || minutes === 41 || minutes === 51) {
              var ref_minutes = "минута";
            } else if (minutes > 1 && minutes < 5 || minutes > 21 && minutes < 25 || minutes > 31 && minutes < 35 || minutes > 41 && minutes < 45 || minutes > 51 && minutes < 55) {
              ref_minutes = "минуты";
            } else {
              ref_minutes = "минут";
            }

            if (seconds === 1 || seconds === 21 || seconds === 31 || seconds === 41 || seconds === 51) {
              var ref_seconds = "секунда";
            } else if (seconds > 1 && seconds < 5 || seconds > 21 && seconds < 25 || seconds > 31 && seconds < 35 || seconds > 41 && seconds < 45 || seconds > 51 && seconds < 55) {
              ref_seconds = "секунды";
            } else {
              ref_seconds = "секунд";
            }

            // set to DOM
            container.find(".days").text(days);
            container.find(".hours").text(hours);
            container.find(".minutes").text(minutes);
            container.find(".seconds").text(seconds);

            container.find(".days_ref").text(ref_days);
            container.find(".hours_ref").text(ref_hours);
            container.find(".minutes_ref").text(ref_minutes);
            container.find(".seconds_ref").text(ref_seconds);
        };

        // start
        var interval = setInterval(countdown, 1000);
    };

})(jQuery);
