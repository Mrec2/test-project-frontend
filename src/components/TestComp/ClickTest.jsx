import styles from "./ClickTest.module.css";

import TestAxios from "../../../services/testAxios";

const ClickTest = () => {

    const getHtmlTest = () => {
        console.log("Entra en getHtmlTest");
        const jsAxios = new TestAxios();
        jsAxios.postTest("HTML");
    };

    const getCssTest = () => {
        console.log("Entra en getCssTest");
        const jsAxios = new TestAxios();
        jsAxios.postTest("CSS");
    };

    const getJsTest = () => {
        console.log("Entra en getJsTest");
        const jsAxios = new TestAxios();
        jsAxios.postTest("Javascript");
    };

    const getJavaTest = () => {
        console.log("Entra en getJavaTest");
        const jsAxios = new TestAxios();
        jsAxios.postTest("Java");
    };

    return (

        <>
            <section className={styles.cards}>

                <article className={styles.cardItem}>

                    <div className={styles.cardContent}>

                        <figure className={styles.cardPicture} onClick={getHtmlTest}>

                            <img
                                src="/imgs-tests-page/html.png"
                                alt="HTML"
                                className={styles.cardImg}
                            />

                        </figure>

                        <div className={styles.cardTexts}>

                            <h2 className={styles.cardTitle}>
                                HTML
                            </h2>

                        </div>

                    </div>

                </article>


                <article className={styles.cardItem}>

                    <div className={styles.cardContent}>

                        <figure className={styles.cardPicture} onClick={getCssTest}>

                            <img
                                src="/imgs-tests-page/css.png"
                                alt="CSS"
                                className={styles.cardImg}
                            />

                        </figure>

                        <div className={styles.cardTexts}>

                            <h2 className={styles.cardTitle}>
                                CSS
                            </h2>

                        </div>

                    </div>

                </article>


                <article className={styles.cardItem}>

                    <div className={styles.cardContent}>

                        <figure className={styles.cardPicture} onClick={getJsTest}>

                            <img
                                src="/imgs-tests-page/js.png"
                                alt="CSS"
                                className={styles.cardImg}
                            />

                        </figure>

                        <div className={styles.cardTexts}>

                            <h2 className={styles.cardTitle}>
                                JavaScript
                            </h2>

                        </div>

                    </div>

                </article>


                <article className={styles.cardItem}>

                    <div className={styles.cardContent}>

                        <figure className={styles.cardPicture} onClick={getJavaTest}>

                            <img
                                src="/imgs-tests-page/java.png"
                                alt="CSS"
                                className={styles.cardImg}
                            />

                        </figure>

                        <div className={styles.cardTexts}>

                            <h2 className={styles.cardTitle}>
                                Java
                            </h2>

                        </div>

                    </div>

                </article>

            </section>
        </>

    );

};

export default ClickTest;
