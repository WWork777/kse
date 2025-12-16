import Link from "next/link";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container_top}>
        <div className={styles.item}>
          <h3>К.С.Е.</h3>
          <p className={styles.description}>
            Студия профессиональной полировки автомобильных стёкол.
            Восстановление прозрачности, устранение царапин и защита вашего авто
            для безопасной езды в любую погоду.
          </p>
        </div>
        <div className={styles.item}>
          <h3>Контакты</h3>
          <Link href={"mailto:kse-polishglass@yandex.ru"}>
            kse-polishglass@yandex.ru
          </Link>
          <span>Кемерово, ул. Терешковой, 41/3</span>
          <Link href="tel:">+7 (923) 523-44-23</Link>
        </div>
        <div className={styles.item}>
          <h3>Навигация</h3>
          <Link href="/">Главная</Link>
          <Link href="/#services">Услуги</Link>
          <Link href="/#about">О нас</Link>
          <Link href="https://t.me/Fizik_Sergey">Оставить заявку</Link>
          <Link href="/#contacts">Контакты</Link>
        </div>
        <div className={styles.item}>
          <h3>Связаться с нами</h3>
          <div className={styles.socials}>
            {/* Добавьте иконки соцсетей здесь */}
            <Link href="mailto:kse-polishglass@yandex.ru">Email</Link>
            <Link href="https://t.me/kse_glass_polishing">Telegram</Link>
            <Link href="https://vk.com/kse_glass_polishing">VK</Link>
          </div>
        </div>
      </div>
      <div className={styles.container_bottom}>
        <span>© 2025 К.С.Е. Все права защищены.</span>
        <span>Разработка сайта — SAKNE</span>
      </div>
    </footer>
  );
}
