mon interface :
un bouton

Ecoute => onClick(argumentFonction)

Le click amene dans le containers => import { connect } from 'redux' 

# Dans le container
## Il y a deux fonctions
- premiere fonction = fonction de lecture (mapStateToProps)
- deuxieme fonction = fonction d'écriture (mapDispatchToProps)

#### Fonction d'écriture 
elle recoit la fonction :
```
    argumentFonction : () => {
        const action = monAction()
        dispatch(action)
    }
```

### Dossier actions
export const MON_ACTION = "MON_ACTION";

export const monAction = () => {
    type: MON_ACTION,
}

### Dossier reducer
il y un state initial
il y a une fonction reducer
Dans cette fonction reducer il a un switch =>  Le switch va comparer l'action recu
avec tous ses cases
switch(action.type)
case MON_ACTION {
    les ordres a éxécuter
    return {
        ...state,
        maModifDeState = monOrdrePourChangerLeState,
    }
}
