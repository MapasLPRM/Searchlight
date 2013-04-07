---
layout: default
title: searchlight
---

Sobre
-----

Searchlight é um framework que pretende iluminar uma das partes mais importantes dos mapas web: o conteúdo.

Para isso ele oferece recursos para facilitar a visualização e compreensão de mapas web. Tendo como foco os mapas com informações de crowdsourcing que geralmente trabalham com quantidades elevadas de dados.

A missão do projeto é agrupar, numa única ferramenta, técnicas de visualização de mapas que permitam um melhor aproveitamento dos dados e compreensão das informações exibidas pelo mapa.

O projeto tem 3 objetivos principais:

* Organizar os dados: por  camadas, grupos e categorias.
* Filtrar os dados: por zoom contextual, conteudo, categorias, tempo e hierarquia.
* Usabilidade: fácil acesso  para programadores mas também para usuários finais. 


Exemplos
--------
Alguns exemplos, dos recursos fornecidos pelo framework, podem ser vistos a seguir.

### Escolha de camadas
No mapa abaixo, alguns marcadores não são exibidos se desabilitarmos a visualização da camada 'centros'.
<div id="map"> </div>

### Zoom Inteligente
Um problema irritante dos mapas atuais é quantidade de zooms necessários para se chegar ao lugar de interesse no mapa.

Um forma de contornar isso é evitando zooms intermediários. No exemplo abaixo é possivel diminuir o zoom do mapa,  mas ao tentar aumentá-lo , o mapa pula para um zoom específico e mais relevante.
<div id="map2"> </div>


### Agrupamento e Zoom Contextual

Quando temos muitos marcadores podemos agrupá-los para melhorar a visualização. Além disso, algumas informações são irrelevantes para determinados níveis de zoom, e podem ser agrupadas de acordo com o zoom.

<div id="map_cluster"> </div>

Um recurso interessante é o zoom contextual. No mapa acima, esse zoom pode ser feito ao clicarmos em um grupo. Observe que nesse caso é feito um zoom inteligente que mostra toda a area do agrupamento.

No mapa anterior usamos o agrupamento como contexto, mas outros contextos podem ser usados como parâmetro de zoom. Podemos efeutar um zoom baseado num atributo, categoria ou região dos marcadores.

O mapa abaixo exemplifica isso: 

-------- Em construção ------------- 

### Geração automática de mapa
Searchlight permite o uso de planilhas eletrônicas do google docs como base de dados para o seu mapa automaticamente (não é preciso saber programar).

<div id='map_gdoc'> </div>

Os marcadores do mapa acima foram obtidos através de um planilha do google docs ([planilha](https://docs.google.com/spreadsheet/pub?key=0AhU-mW4ERuT5dHBRcGF5eml1aGhnTzl0RXh3MHdVakE&single=true&gid=0&output=html))  que tem como coteudo as posições e os titulos dos marcadores.

Qualquer alteração na planilha é refletida automaticamente no mapa. Se adicionarmos uma nova linha na planilha, com dados de um marcador, o mapa automaticamente exibe o novo marcador, se tirarmos uma linha o marcador respectivo some.
#### Gerando e compartilhando um mapa
Para criar e compartilhar seu próprio mapa, basta criar uma planilha publica no google docs contendo os dados geograficos que deseja compartilhar. Observe, é claro, a convenção de nomes para as colunas da planilha. 

Após criar a planilha, cole o link publico no campo abaixo e clique em compartilhar.
<form method="GET" action="view.html">Endereço da planilha:  <input type="text" style="width:600px" name="data" value="https://docs.google.com/spreadsheet/pub?key=0AhU-mW4ERuT5dHBRcGF5eml1aGhnTzl0RXh3MHdVakE&single=true&gid=0&output=html" />
  <input type="submit" value="compartilhar" />
</form>

### Balões de Resumo 
No mapa abaixo observamos o uso de balões para mostrar o conteúdo resumido de um agrupamento de marcadores.

O balão exibe as categorias em que os membros do grupo pertecem assim como o número de membros por categoria.

-------- Em construção ------------- 

### Filtro por Categoria e Tempo
No mapa abaixo podemos filtrar os marcadores e exibir apenas os que pertencem as categorias escolhidos e com atributo data dentro do período de tempo escolhido.

-------- Em construção ------------- 



### Buscar em mapa
No mapa abaixo podemos buscar por um marcador, ou um conjunto de marcadores, usando o seu título e/ou outros atributos no campo de busca.

-------- Em construção ------------- 


### geocoding
<div id="map_geo"> </div>

