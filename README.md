<h1>StartProject - заготовки для верстки пректа.</h1>
<h2>Для старта заготовки проекта необходимо выполнить:</h2>
<p><code>npm install</code>(подтянуть плагины Grunt), <code>bower install</code>(собрать необходимые библеотеки).</p>
<p>При вызове<code>grunt</code> запустится:</p>
<ul>
	<li>grunt-contrib-watch (Run predefined tasks whenever watched file patterns are added, changed or deleted).</li>
	<li>grunt-contrib-less. Компиляцию less в css. (assets/css -> dist/)</li>
	<li>grunt-contrib-uglify. Минификация js (assets/js -> dist/)</li>
	<li>grunt-autoprefixer. Autoprefixer </li>
</ul>
<p>Запуск сжатия картинок - <code>grunt imagemin</code>(assets/img/ -> dist/img/)</p>
<h2>Предпологается создавать верстку в соотвецтвии с БЕМ методологией</h2>
<p>О методологии БЭМ - <a href="https://ru.bem.info/method/definitions/">Что такое БЭМ?</a><b>*</b></p>
<p>Из инструментов для БЭМ используется - less. Less заботится  о имени селекторов.
Идея взята с <a href="http://noteskeeper.ru/1139/"><small>Генерация названий селекторов в стиле БЭМ с помощью препроцессоров</small></a></p>
