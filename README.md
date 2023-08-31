# 7days-logicacomJs
<h1>Desafio #7DaysOfCode - Lógica de Programação com Javascript</h1>

<img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow" alt="Status do Projeto: Em Desenvolvimento">

<h2>Descrição do Desafio</h2>
<p>Durante este projeto, recebi 7 tarefas via e-mail, contendo instruções do que eu deveria fazer, utilizando conhecimentos de <strong>lógica de programação com Javascript</strong>.</p>
<p>Decidi incrementar meus conhecimentos de <strong>HTML e CSS</strong> para criar um layout básico e apresentar as minhas soluções para os desafios propostos. O próposito, de fato, não é focar na parte de design e sim, expor as soluções.</p>

<h3>Explicando os Desafios (e como pensei nas soluções)</h3>
<h4>1º Desafio</h4>
<p>O objetivo principal deste desafio é compreender e comparar os valores de duas variáveis entre si.</p>
<p>Recebi instruções para comparar os valores das seguintes variáveis: </p>
<p class="container__principal-texto">let numeroUm = 1</p>
<p class="container__principal-texto">let stringUm = '1'</p>
<p class="container__principal-texto">let numeroTrinta = 30</p>
<p class="container__principal-texto">let stringTrinta = '30'</p>
<p class="container__principal-texto">let numeroDez = 10</p>
<p class="container__principal-texto">let stringDez = '10'</p>

<h5>Como resolvi o problema?</h5>
<ol>
  <li>Inseri todos os dados no HTML e estilizei os elementos</li>
  <li>Criei um arquivo .js e linkei no HTML através da tag <script>;</li>
  <li>Criei e iniciailizei as variáveis conforme o desafio propôs;</li>
  <li>Capturei os elementos necessários para exibição da resposta;</li>
  <li>Capturei o elemento do botão que faz a verificação;</li>
  <li>Criei a função que vai fazer a verificação;
    <ul type="disc">
      <li>Fiz as verificações utilizando if/else para cada caso separadamente;</li></ul>
  </li>
  <li>Coloquei a opção de visualizar o código, clicando no botão Ver Código.</li>
</ol>

<h6>Minhas considerações</h6>
<ul>
  <li>Desafio de dificuldade baixa.</li>
  <li>Optei por alterar o CSS utilizando Javascript;</li>
  <li>Facilitou o entendimento sobre <strong>o tipo</strong> das variáveis e <strong>operadores lógicos;</strong></li>
</ul>

<h4>2º Desafio</h4>
<p>O objetivo principal deste desafio é entender como capturar e armazenar valores dentro de variáveis.</p>
<p>As instruções recebidas foram:</p>
<ul>
  <li>O usuário deve informar o seu nome, a sua idade e qual linguagem de programação está aprendendo;</li>
  <li>O programa deve coletar as informações fornecidas pelo usuário e armazenar em variáveis distintas;</li>
  <li>O programa deve imprimir na tela o nome do usuário, a sua idade e qual linguagem está aprendendo, de acordo com o seguinte script: "Olá, <strong>X</strong>! Você tem <strong>Y</strong> anos e já está aprendendo <strong>Z</strong> linguagem.</li>
  <li>A exibição poderia ser feita na própria página, ou utilizando alert();</li>
  <li>A coleta das informações fornecidas pelo usuário poderia ser feita na própria página, como um formulário, ou utilizando prompt();</li>
</ul>
<h5>Como resolvi o problema?</h5>
<ol>
  <li>Inseri todos os dados no HTML e estilizei os elementos</li>
  <li>Criei um arquivo .js e linkei no HTML através da tag <script>;</li>
  <li>Capturei o elemento do botão Enviar</li>
  <li>Adicionei a função do click no botão Enviar, chamando a função que irá fazer a ação do click;
  <ul type="squad">
    <li>Capturei os elementos de input, responsáveis por receber a entrada do usuário;</li>
    <li>Criei variáveis para armazenar os valores de cada input;</li>
    <li>Fiz a verficação se os campos foram enviados todos preenchidos e, neste caso, o programa mostrou na tela o script informado, com as informações disponibilizadas pelo usuário no envio do formulário;</li>
    <li>Adicionei a verificação de que caso algum campo esteja vazio, abrir um pop-up informando: "Por favor, preencha todos os campos";</li>
  </ul>
</ol>

<h6>Minhas considerações</h6>
<p>Desafio de dificuldade baixa. As validações não eram obrigatórias, inclusive nem foram mencionadas como parte da solução.. incrementei como desafio extra.</p>

