// JavaScript Document
jQuery(document).ready(function($){
								
;(function(element) {
		var $respl = $(element);
		var $container = $('.respl-items', $respl);

		$container.imagesLoaded(function() {
			$container.isotope({
				containerStyle: {
					position: 'relative',
					height: 'auto',
					overflow: 'visible'
				},
				itemSelector: '.respl-item',
				sortAscending: true

			});
			_opTionSets();
			function _opTionSets(){
				var $optionSets = $('.respl-option'),
				$optionLinks = $optionSets.find('li');
				$optionLinks.click(function(){
						var $this = $(this);
						//console.log($(this).index());
						var $optionSet = $this.parent();

						$this.addClass('select').siblings().removeClass('select');
						
						var options = {},key = $optionSet.attr('data-option-key'),value = $this.find('a').attr('data-rl_value');
						
						value = value === 'false' ? false: value;
						
						options[key] = value;
						//console.log(options);
						$container.isotope(options);
						
						return false;
				});
                $optionLinks.eq(0).trigger('click');
			}

		});
	})('#yhc_responsive');
});

