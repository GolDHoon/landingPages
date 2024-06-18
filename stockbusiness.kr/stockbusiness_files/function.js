console.log('js is load👍');

function moveProgressBar() {
    var getPercent = ($('.progress-wrap').data('progress-percent') / 100),
        getProgressWrapWidth = $('.progress-wrap').width(),
        progressTotal = getPercent * getProgressWrapWidth,
        animationLength = 2500;
    
    $('.progress-bar').stop().animate({
        left: progressTotal
    }, animationLength);
}

function countTime(){
  (function ($) {
    $.fn.countTo = function (options) {
      options = options || {};
      
      return $(this).each(function () {
        var settings = $.extend({}, $.fn.countTo.defaults, {
            from:            $(this).data('from'),
            to:              $(this).data('to'),
            speed:           $(this).data('speed'),
            refreshInterval: $(this).data('refresh-interval'),
            decimals:        $(this).data('decimals')
          }, options);
        
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
            increment = (settings.to - settings.from) / loops;
        
        var self = this,
            $self = $(this),
            loopCount = 0,
            value = settings.from,
            data = $self.data('countTo') || {};
        
        $self.data('countTo', data);
        
        if (data.interval) {
          clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);
        
        render(value);
        
        function updateTimer() {
          value += increment;
          loopCount++;
          
          render(value);
          
          if (typeof(settings.onUpdate) == 'function') {
            settings.onUpdate.call(self, value);
          }
          
          if (loopCount >= loops) {
            $self.removeData('countTo');
            clearInterval(data.interval);
            value = settings.to;
            
            if (typeof(settings.onComplete) == 'function') {
              settings.onComplete.call(self, value);
            }
          }
        }
        
        function render(value) {
          var formattedValue = settings.formatter.call(self, value, settings);
          $self.html(formattedValue);
        }
      });
    };
    
    $.fn.countTo.defaults = {
      from: 0,              
      to: 0,                 
      speed: 1000,         
      refreshInterval: 100,  
      decimals: 0,          
      formatter: formatter,  
      onUpdate: null,        
      onComplete: null       
    };
    
    function formatter(value, settings) {
      return value.toFixed(settings.decimals);
    }
  }(jQuery));
  
  jQuery(function ($) {
    $('.count-number').data('countToOptions', {
    formatter: function (value, options) {
      return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    }
    });
    
    $('.timer').each(count);  
    
    function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
    }
  });
}

$(window).load(function(){
  var liveDate = $('.live_date'),
      isDate = new Date,
      isYear = isDate.getFullYear(),
      isMonth = isDate.getMonth() + 1,
      isDay = isDate.getDate(),
      setDate = isYear + '. ' + isMonth + '. ' + isDay;

  liveDate.html(setDate);
  slideShow();
});

function slideShow() {
  var slide_01 = $('.slide_01'),
      slide_02 = $('.slide_02'),
      slide_03 = $('.slide_03'),
      slide_04 = $('.slide_04');

  setTimeout(() => {
    slide_01.css('left','-100%');
    slide_02.css('left','50%');
  }, 1500);
  setTimeout(() => {
    slide_02.css('left','-100%');
    moveProgressBar();
    countTime();
    slide_03.css('left','50%');
  }, 6000);
  setTimeout(() => {
    $('.count_notice').fadeIn();
  }, 8500);
  setTimeout(() => {
    slide_03.css('left','-100%');
    slide_04.css('left','50%');
  }, 10000);
}