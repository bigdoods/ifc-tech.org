;(function () {
	var partners = [
		{
			type: 0,
			name: 'CompanyA',
			logo: 'logo',
			link: 'https://google.com/',
			blurb: '{Company/Product} is {detail}. It {does something}.'
		},
		{
			type: 1,
			name: 'CompanyB',
			logo: 'logo',
			link: 'https://google.com/',
			blurb: '{Company} offers {Support type and detail}.'
		}
	]

	var isvContainer = document.getElementById('isvContainer')
	var servContainer = document.getElementById('servContainer')

	var sorted = partners.sort(function (a, b) {
		if (a.name > b.name) return 1
		if (a.name < b.name) return -1
		return 0
	})

	sorted.forEach(function (obj) {
		var box = document.createElement('div')
		box.className = 'partner-box'

		var img = document.createElement('img')
		img.src = '/images/square-logos/' + obj.logo + '.png'

		var div = document.createElement('div')

		var p = document.createElement('p')
		p.textContent = obj.blurb

		var link = document.createElement('a')
		link.href = obj.link
		link.target = '_blank'
		link.textContent = 'Learn more'

		div.appendChild(p)
		div.appendChild(link)

		box.appendChild(img)
		box.appendChild(div)

		var container = obj.type ? servContainer : isvContainer
		container.appendChild(box)
	})
})();
