import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header>
<h1>Plug2B</h1>
<p><em>Website versão beta, a versão oficial ainda em desenvolvimento</em></p>
<p>Seu HUB de soluções e serviços de T.I</p>
</header>

<section>
<h2>Sobre Nós</h2>
<p>Somos uma empresa de T.I. especializada na criação de softwares de integração com serviços como WhatsApp API, Telegram, E-mail, e APIs de redes sociais como Facebook e Instagram.</p>
</section>

<section>
<h2>Entre em Contato</h2>
<form id="contatoForm">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required>

    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" required>

    <label for="mensagem">Mensagem:</label>
    <textarea id="mensagem" name="mensagem" rows="4" required></textarea>

    <button type="button" onclick="enviarMensagem()">Enviar Mensagem</button>
</form>
</section>

<footer>
&copy; 2024 Plug2B - Todos os direitos reservados
</footer>

<script>
function enviarMensagem() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    // Aqui você pode adicionar lógica para lidar com os dados, por exemplo, exibindo no console.
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Mensagem:', mensagem);

    // Você pode adicionar mais lógica aqui, como enviar os dados para um servidor, etc.
}
</script>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
