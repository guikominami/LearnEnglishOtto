import Phrase from "../models/phrases";

export const PHRASES = [
  new Phrase(
    1,
    "Pedir suco",
    "Pode me trazer um suco de laranja, por favor?",
    "Can I have an orange juice, please?",
    require("../assets/audios/suco.wav")
  ),
  new Phrase(
    2,
    "Agradecer",
    "Obrigado",
    "Thank you",
    require("../assets/audios/obrigado.wav")
  ),
  new Phrase(
    3,
    "Dizer bom dia.",
    "Bom dia",
    "Good morning",
    require("../assets/audios/bomdia.wav")
  ),  
  new Phrase(
    4,
    "Dizer seu nome.",
    "Meu nome é Otto.",
    "My name is Otto",
    require("../assets/audios/nome.wav")
  ),
  new Phrase(
    5,
    "Perguntar o nome de alguém.",
    "Qual é o seu nome?",
    "What is your name?",
    require("../assets/audios/nome.wav")
  ),
  new Phrase(
    6,
    "Perguntar se a pessoa está bem.",
    "Como você está?",
    "How are you?",
    require("../assets/audios/nome.wav")
  ),
  new Phrase(
    7,
    "Perguntar o preço.",
    "Quanto custa isso?",
    "How much is it?",
    require("../assets/audios/nome.wav")
  ),
  new Phrase(
    8,
    "Perguntar se alguém quer jogar.",
    "Você quer jogar?",
    "Would you like to play?",
    require("../assets/audios/nome.wav")
  ),
  new Phrase(
    9,
    "Dizer a nacionalidade",
    "Eu sou brasileiro.",
    "I am brazilian.",
    require("../assets/audios/nome.wav")
  ),
  new Phrase(
    10,
    "Pedir um sanduíche",
    "Pode me trazer um mixto quente, por favor?",
    "Can I have a ham and cheese sandwich, please?",
    require("../assets/audios/suco.wav")
  ),    
];
