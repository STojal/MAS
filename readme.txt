Ola Professor,

Gostaríamos de informar que nosso projeto já está acessível por meio do seguinte URL: https://stojal.github.io/. Na pasta correspondente, você encontrará todo o código-fonte e as imagens que compõem nosso site.

Para utilizar todas as funcionalidades do site, recomendamos o uso das seguintes contas:

Cliente:

Usuário: Teste
Senha: 1234abcd

Veterinário:

Usuário: Vet
Senha: 1234abcd

Nosso site mantém o estado da conta no local storage. Durante a utilização, você notará que a barra de navegação é dinamicamente atualizada conforme o perfil do usuário. Opções específicas serão exibidas quando logado, variando conforme o tipo de usuário, seja cliente ou veterinário.

Além disso, nosso site armazena as informações da última consulta na local storage. Quando o veterinário realiza atualizações, essas mudanças são automaticamente refletidas na aba do cliente. O veterinário tem a capacidade de editar informações previamente inseridas a qualquer momento.

Outro recurso da local storage é utilizado para agendar consultas. Assim que uma consulta é marcada, as informações são imediatamente atualizadas no horário do veterinário.

É importante ressaltar que podem surgir problemas ao executar testes se a local storage já contiver dados. Por exemplo, se um usuário estiver logado e um teste tentar efetuar o login de um cliente, o teste pode não ser concluído com sucesso devido à presença de uma conta já logada. Recomendamos a limpeza da local storage antes dos testes ou verificar se está deslogado, garantindo uma execução adequada e precisa.

Saudações acadêmicas e excelentes festas.

Atenciosamente, 