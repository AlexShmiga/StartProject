<h1>StartProject - заготовка для верстки пректа</h1>
<h2>Для старта заготовки проекта необходимо:</h2>
<p>Установить node.js</p>
<p>Выполнить в консоли: 
<ul>
	<ol><code>npm install</code> (подтянуть плагины Grunt)</ol> 
	<ol><code>bower install</code> (собрать необходимые библеотеки)</ol>
</ul>
<p>При вызове команды <code>grunt</code> запустится:</p>
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
<p>Пример блока, елемента, модификатора в less</p>
<p><pre style="background:#000;color:#f8f8f8">.myblock {<span style="color:#aeaeae;font-style:italic">/* пример блока */</span>
    <span style="color:#dad085">color</span><span style="color:#e28964">:</span> orange;
    <span style="color:#e28964">&amp;</span>_size_s{<span style="color:#aeaeae;font-style:italic">/* пример модификатора блока */</span>
        <span style="color:#dad085">color</span><span style="color:#e28964">:</span> green;
    }
    <span style="color:#e28964">&amp;</span>__title {<span style="color:#aeaeae;font-style:italic">/* пример элемента */</span>
        border<span style="color:#e28964">:</span> 10px solid red;
        <span style="color:#e28964">&amp;</span>_state_active {<span style="color:#aeaeae;font-style:italic">/* пример модификатора елемента */</span>
            background<span style="color:#e28964">:</span> green;
            <span style="color:#dad085">color</span><span style="color:#e28964">:</span> white;
        }
    }
}
</pre></p>