import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';

export default function App() {

  const DATA = {
  "success": true,
  "message": "Success",
  "data": { 
    "category": {
      "name": "receitas de Arroz e Risotos",
      "url": "https://www.receiteria.com.br/arroz-e-risotos/",
      "totalRecipes": 48
    },
    "recipes": [
      {
        "id": 1,
        "title": "Arroz de leite doce",
        "slug": "arroz-de-leite-doce",
        "url": "https://www.receiteria.com.br/receita/arroz-de-leite-doce/",
        "image": "https://www.receiteria.com.br/wp-content/uploads/arroz-de-leite-doce-0-400x220.jpeg",
        "duration": "45min",
        "difficulty": "Não informado",
        "rating": null,
        "preview": {
          "hasImage": true,
          "estimatedReadTime": " 45min + tempo de preparo"
        }
      },
      {
        "id": 2,
        "title": "Arroz de leite simples",
        "slug": "arroz-de-leite-simples",
        "url": "https://www.receiteria.com.br/receita/arroz-de-leite-simples/",
        "image": "https://www.receiteria.com.br/wp-content/uploads/arroz-de-leite-simples-400x220.jpg",
        "duration": "30min",
        "difficulty": "Não informado",
        "rating": null,
        "preview": {
          "hasImage": true,
          "estimatedReadTime": " 30min + tempo de preparo"
        }
      },
      {
        "id": 3,
        "title": "Arroz de Natal para ceia",
        "slug": "arroz-de-natal-para-ceia",
        "url": "https://www.receiteria.com.br/receita/arroz-a-grega-de-natal/",
        "image": "https://www.receiteria.com.br/wp-content/uploads/arroz-de-natal-para-ceia-400x220.jpg",
        "duration": "40min",
        "difficulty": "Não informado",
        "rating": null,
        "preview": {
          "hasImage": true,
          "estimatedReadTime": " 40min + tempo de preparo"
        }
      },
      {
        "id": 4,
        "title": "Arroz de leite salgado",
        "slug": "arroz-de-leite-salgado",
        "url": "https://www.receiteria.com.br/receita/arroz-de-leite-salgado/",
        "image": "https://www.receiteria.com.br/wp-content/uploads/arroz-de-leite-salgado-0-400x220.jpeg",
        "duration": "17min",
        "difficulty": "Não informado",
        "rating": null,
        "preview": {
          "hasImage": true,
          "estimatedReadTime": " 17min + tempo de preparo"
        }
      },
      {
        "id": 5,
        "title": "Arroz de Natal temperado",
        "slug": "arroz-de-natal-temperado",
        "url": "https://www.receiteria.com.br/receita/arroz-de-natal-temperado/",
        "image": "https://www.receiteria.com.br/wp-content/uploads/arroz-de-natal-temperado-400x220.jpg",
        "duration": "45min",
        "difficulty": "Não informado",
        "rating": null,
        "preview": {
          "hasImage": true,
          "estimatedReadTime": " 45min + tempo de preparo"
        }
      },
      {
        "id": 6,
        "title": "Arroz natalino",
        "slug": "arroz-natalino",
        "url": "https://www.receiteria.com.br/receita/arroz-natalino/",
        "image": "https://www.receiteria.com.br/wp-content/uploads/arroz-natalino-400x220.jpg",
        "duration": "30min",
        "difficulty": "Não informado",
        "rating": null,
        "preview": {
          "hasImage": true,
          "estimatedReadTime": " 30min + tempo de preparo"
        }
      },
      {
        "id": 7,
        "title": "Arroz de leite cremoso",
        "slug": "arroz-de-leite-cremoso",
        "url": "https://www.receiteria.com.br/receita/arroz-de-leite-cremoso/",
        "image": "https://www.receiteria.com.br/wp-content/uploads/arroz-de-leite-cremoso-0-1-400x220.jpg",
        "duration": "30min",
        "difficulty": "Não informado",
        "rating": null,
        "preview": {
          "hasImage": true,
          "estimatedReadTime": " 30min + tempo de preparo"
        }
      },
      {
        "id": 8,
        "title": "Arroz de Natal com passas",
        "slug": "arroz-de-natal-com-passas",
        "url": "https://www.receiteria.com.br/receita/arroz-de-natal-com-passas/",
        "image": "https://www.receiteria.com.br/wp-content/uploads/arroz-de-natal-com-passas-400x220.jpg",
        "duration": "23min",
        "difficulty": "Não informado",
        "rating": null,
        "preview": {
          "hasImage": true,
          "estimatedReadTime": " 23min + tempo de preparo"
        }
      },
      {
        "id": 9,
        "title": "Arroz de leite cremoso simples",
        "slug": "arroz-de-leite-cremoso-simples",
        "url": "https://www.receiteria.com.br/receita/arroz-de-leite-cremoso-simples/",
        "image": "https://www.receiteria.com.br/wp-content/uploads/arroz-de-leite-cremoso-simples-400x220.jpeg",
        "duration": "35min",
        "difficulty": "Não informado",
        "rating": null,
        "preview": {
          "hasImage": true,
          "estimatedReadTime": " 35min + tempo de preparo"
        }
      },
      {
        "id": 10,
        "title": "Arroz com frango na panela de pressão",
        "slug": "arroz-com-frango-na-panela-de-press-o",
        "url": "https://www.receiteria.com.br/receita/arroz-com-frango-na-panela-de-pressao/",
        "image": "https://www.receiteria.com.br/wp-content/uploads/arroz-com-frango-na-panela-de-pressao-400x220.jpeg",
        "duration": "15min",
        "difficulty": "Não informado",
        "rating": null,
        "preview": {
          "hasImage": true,
          "estimatedReadTime": " 15min + tempo de preparo"
        }
      }
    ],
    "meta": {
      "extractedAt": "2025-12-03T01:00:33.885Z",
      "totalFound": 48,
      "source": "receiteria.com.br"
    }
  },
  "meta": {
    "timestamp": "2025-12-03T01:00:33.885Z",
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 40,
      "totalPages": 4
    }
  }
}
  return (
    <View style={styles.container}>

      <Text>{DATA.data.category.name}</Text>
      <FlatList
        data={DATA.data.recipes}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
