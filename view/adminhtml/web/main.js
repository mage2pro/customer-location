require([
	'jquery'
], function($) {$(function() {
	/** @type {jQuery} HTMLTableCellElement */
	var $ipAddressCell = $('.order-information-table td').filter(function() {
		return /\d+\.\d+\.\d+\.\d+/.test(this.innerHTML);
	});
	if ($ipAddressCell.length) {
		/** @type {String} */
		var address = $ipAddressCell.html();
		if ('127.0.0.1' !== address) {
			$.get('https://freegeoip.net/json/' + address, function(data) {
				/** @type {String} */
				var location =
					[data['country_name'], data['region_name'], data['city']]
						.filter(function(item) {return !!item;})
						.join(', ')
				;
				/** @type {jQuery} HTMLTableRowElement */
				var $ipAddressRow = $ipAddressCell.closest('tr');
				var $geoRow = $('<tr>')
					.append($('<th>').append($.mage.__('Customer Location')))
					.append($('<td>').append(location))
				;
				$ipAddressRow.after($geoRow);
			});
		}
	}
});});