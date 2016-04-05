/**
 * KEYPAD jQuery plugin
 * 
 * Created under the MIT License
 * Use, modifying and redistribution are granted, 
 * as long as this copyright notice is present near the code.
 *
 * This work is provided 'as is'. 
 * The author can not be held accountable for any failure, risk 
 * or other liabilities
 * 
 * Copyright: Peter de Kok <info@peterdekok.nl>
 * version: 1.0
 * 
 */

(function ($) {
    
    $.fn.keypad = function(options) {
        
        settings = {
            'length': options.length || 4,
            'password': options.password || false,
            'inputName': options.inputName || 'keypad',
            'inputDisabled': options.inputDisabled || false,
            'buttonText': options.buttonText || 'Submit'
        };
        
        var $this = $(this);
        $this.append('<div class="input"><input name="' + settings.inputName + '" type="' + (settings.password ? 'password' : 'text') + '"' + (settings.inputDisabled ? ' disabled' : '') + '></div>');
        $this.append('<div class="button" data-value="7"><div><span></span></div></div>');
        $this.append('<div class="button" data-value="8"><div><span></span></div></div>');
        $this.append('<div class="button" data-value="9"><div><span></span></div></div>');
        $this.append('<div class="button" data-value="4"><div><span></span></div></div>');
        $this.append('<div class="button" data-value="5"><div><span></span></div></div>');
        $this.append('<div class="button" data-value="6"><div><span></span></div></div>');
        $this.append('<div class="button" data-value="1"><div><span></span></div></div>');
        $this.append('<div class="button" data-value="2"><div><span></span></div></div>');
        $this.append('<div class="button" data-value="3"><div><span></span></div></div>');
        $this.append('<div class="button"></div>');
        $this.append('<div class="button" data-value="0"><div><span></span></div></div>');
        $this.append('<div class="button submit"><div><span>' + settings.buttonText + '</span></div></div>');
        
        // Add values to buttons and change size
        var i = 0;
        $(this).children('div.button').each(function () {
            var width = $(this).width();
            $(this).find('div > span').html($(this).data('value')).css('font-size', 32 / Math.sqrt(100/width) + 'px');
            console.log(i);
            i++;
        });
        
        // Fontsize
        $(window).on('resize', function() {
            $this.children('div.button').each(function () {
                var width = $(this).width();
                $(this).find('div > span').css('font-size', 32 / Math.sqrt(100/width) + 'px');
            });
        });
        
        // On mouse down
        $(this).on('mousedown', '.button', function(e) {
            $(this).addClass('selected');
        });
        $(this).on('mouseup mouseout', '.button', function(e) {
            $(this).removeClass('selected');
        });
        
        // Click bind
        // And submit on character limit if in form element.
        $(this).on('click', '.button', function(e) {
            if ($(this).data('value') != undefined) {
                $this.find('input').val($this.find('input').val() + $(this).data('value'));
                if ($this.find('input').val().length > (settings.length - 1)) {
                    var form = $this.parents('form:first');
                    if (form.length) {
                        form.submit();
                    }
                    $this.find('input').val('');
                }
            }
        });
        $(this).on('click', '.submit', function(e) {
            var form = $this.parents('form:first');
            form.submit();
        });
        
    };
    
}(jQuery));