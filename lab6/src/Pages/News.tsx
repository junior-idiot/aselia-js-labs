import React, {useState} from "react";
import {Card} from "../Components/Card/Card.tsx";
import {Button} from "../Components/Button/Button.tsx";
import {Link} from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import {v4 as uuidv4} from "uuid";

type News = {
    id: number | string,
    caption: string,
    text: string,
    link: string,
};

const newsListArray: News[] = [
    {
        id: 1,
        text: "Инженеры Alienware увеличили механическую клавиатуру AW420K и игровую мышку AW720M в 14 раз и проверили как на такой гигантской периферии можно играть в Dota 2 с помощью пяти членов команды Team Liquid. Игрокам понадобилось три монитора для понимания своих действий. В итоге они проиграли первые несколько игр ботам, но получили много опыта в командной работе. После нескольких попыток команда Team Liquid смогла добиться победы на одной из карт, хотя это далось им с трудом.",
        caption: "Инженеры Alienware увеличили механическую клавиатуру и мышку в 14 раз и проверили как на них можно играть в Dota 2",
        link: "https://habr.com/ru/news/771936/",
    },
    {
        id: 2,
        text: "Кто больше вложит в Anthropic, Google или Amazon? Как в Индии улучшают дата-центры? Кому пригодится мощный MacBook Pro чернее чёрного? О важных событиях в мире интеллектуальной собственности — в нашем очередном дайджесте.",
        caption: "Миллиарды для осознанного ИИ, двойная консоль от Nintendo, новый MacBook и отчет от Apple: дайджест главных новостей",
        link: "https://habr.com/ru/companies/onlinepatent/news/771812/"
    },
    {
        id: 3,
        text: "Использование света и управление им имеет огромное значение для развития технологий, включая сбор энергии, вычисления, связь и биомедицинское зондирование. Однако в реальных условиях светом сложно управлять из-за его комплексного поведения. Физик Андреа Алу сравнивает поведение света в хаотических системах с начальным ударом в бильярде: \"В бильярде крошечные изменения в способе запуска шара с кием приводят к тому, что шары разлетаются по столу. Световые лучи действуют аналогичным образом в хаотической полости. Становится трудно моделировать, чтобы предсказать, что произойдёт, потому что можно проводить эксперимент много раз с одинаковыми настройками, и каждый раз получать разный результат\".\n" +
            "\n" +
            "В новом исследовании, опубликованном в журнале Nature Physics, группа специалистов под руководством исследователей из CUNY Graduate Center описывает новую платформу для управления хаотическим поведением света путём настройки его рассеяния с помощью самого света. Проект возглавляли соавторы Сюэфэн Цзян (Xuefeng Jiang), бывший постдокторский исследователь в лаборатории Алу, а ныне доцент кафедры физики Университета Сетон Холл, и Шишионг Инь (Shixiong Yin), аспирант в лаборатории Алу.",
        caption: "Учёные придумали, как можно управлять светом при помощи света",
        link: "https://habr.com/ru/news/771848/"
    },
];

export const News: React.FC = () => {
    const [newsList, setNewsList] = useState<News[]>(newsListArray);

    return (
        <div>
            {newsList.map(news =>
                <Card header={news.caption} key={news.id}>
                    <Button
                        buttonType={"error"}
                        onClick={() => {
                            setNewsList(newsList.filter(el => el.id !== news.id))
                        }}
                    >
                        Delete
                    </Button>
                    <div>
                        {news.text}
                    </div>
                    <Link to={news.link}
                          className={"text-blue-600 border-2 border-b-solid border-transparent border-b-blue-600"}
                          target={"_blank"}>Читать полностью</Link>
                </Card>
            )}

            <Card
                header={"Load news"}
            >
                <Button
                    buttonType={"secondary"}
                    onClick={() => {
                        setNewsList(newsListArray);
                    }}
                >
                    Load
                </Button>

                <Button
                    buttonType={"secondary"}
                    onClick={() => {
                        axios.get("https://saurav.tech/NewsAPI/top-headlines/category/technology/ru.json")
                            .then((response: AxiosResponse<{
                                status: boolean,
                                totalResults: number,
                                articles: {
                                    source: { id: number | null, name: string },
                                    author: string | null,
                                    title: string,
                                    description: string,
                                    url: string,
                                    urlToImage: string,
                                    publishedAt: string,
                                    content: string
                                }[]
                            }>) => {
                                setNewsList(response.data.articles.map((article): News => ({
                                    id: uuidv4(),
                                    caption: article.title,
                                    text: article.description,
                                    link: article.url
                                })));
                            })
                    }}
                >Load from API</Button>
            </Card>
        </div>
    );
}