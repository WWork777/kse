
'use client'
import { useRef } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import styles from './Reviews.module.scss'

export default function Reviews() {
	const swiperRef = useRef(null)

	const reviews = [
		{
			name: 'Илья Котов',
			text: 'Спасибо мастеру Сергею за качественную полировку лобового стекла! Отдавал машину с глубокой неприятной царапиной прямо по середине стекла — результат отличный, дефект полностью ушёл. Всё сделано аккуратно и профессионально. Однозначно рекомендую!',
		},
		{
			name: 'Ольга Саловарова',
			text: 'Очень рада, что обратились именно сюда, быстро договорились, приехала,все было сделано на отлично, спасибо огромное, рекомендую!',
		},
		{
			name: 'Костя Костя',
			text: 'Необходимо было убрать трещину на лобовом стекле. Сделали качественно и оперативно. Цена приемлемая. Рекомендую!',
		},
		{
			name: 'Евгений',
			text: 'Сделали на отлично! Бокс чистый, теплый. Сделали 2 скола и трещину 10 см за 1 час. Молодцы!',
		},
		{
			name: 'Ирина Z',
			text: 'Отличная работа - царапину убрали полностью , стекло, как новое ! Очень рада, что обратилась именно к этому специалисту!',
		},
		{
			name: 'Мария Ефремова',
			text: 'Отличная студия! Профессионально, аккуратно, без спешки. Привезли сразу два автомобиля — муж и я. Нам сделали полировку обоим, плюс по акции нанесли гидрофоб на лобовое. Очень приятный бонус! После дождя вода теперь просто "улетает" со стекла. Сервисом остались довольны.',
		},
		{
			name: 'Сергей Бутаев',
			text: 'Борода, одобряет',
		},
		{
			name: 'Арсен Маркарня',
			text: '"Очень доволен работой студии ! Привёз машину с глубокими царапинами и мутным лобовым. После полировки стекло как новое — прозрачное, без бликов и разводов! Огромное спасибо мастеру Сергею — настоящий профи, не просто «натёр и отправил», а объяснил, как ухаживать и что можно восстановить, а что нет»',
		},
		{
			name: 'juiceVdk .',
			text: 'Обратился к Сергею с проблемой заметных царапин на лобовом. Был готов к тому, что придётся менять стекло, но Сергей убедил попробовать полировку. Результатом остался доволен. Работа выполнена аккуратно, без спешки, с пояснениями на каждом этапе.Стекло как новое, никогда бы не подумал что стекла можно так восстановить.',
		},		{
			name: 'Любовь Ермакова',
			text: 'Обслуживание на высшем уровне, теперь будем обращаться только сюда! Все быстро и четко, без всяких проблем. Стекло блестит как новое. Спасибо!',
		},
		{
			name: 'Дарья Зинченко',
			text: 'Сервис на высоте! Исцарапалось лобовое от дворников, обратились к мастеру Сергею. Проконсультировал, подсказал как сделать лучше, в итоге - минус проблема, стекло блестит, будто машина с салона, следы все исчезли. Рекомендую однозначно!',
		},
		{
			name: 'Олеся Болотина',
			text: 'Красивое помещение, а мастер Сергей выполнил работу на 5++! Лобовое дико бликовало, а с отсветами от снега стало вообще печально. Когда мне посчитали стоимость замены, я была, мягко говоря, в шоке, но благо узнала что в моем случае можно обойтись полировкой.',
		},		{
			name: 'Александр Шевелёв',
			text: 'Лучшее, и пожалуй единственное место в городе, где оказывают подобные услуги. Качество на высоте. Всем рекомендую',
		},
	]

	return (
		<section id='reviews' className={styles.section}>
			<div className={styles.header}>
				<h2 className={styles.title}>Отзывы</h2>
				<div className={styles.rating}>
					<div className={styles.ratingValue}>5.0</div>
					<div className={styles.stars}>
						{[1, 2, 3, 4, 5].map(star => (
							<span key={star} className={styles.star}>
								★
							</span>
						))}
					</div>
					<Link href={"https://2gis.ru/kemerovo/firm/70000001109650675/86.149355%2C55.323901/tab/reviews"} className={styles.reviewButton}>Оставить отзыв</Link>
				</div>
			</div>

			<div className={styles.sliderContainer}>
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={24}
					slidesPerView={1}
					onBeforeInit={swiper => {
						swiperRef.current = swiper
					}}
					pagination={{
						clickable: true,
						el: `.${styles.swiperPagination}`,
					}}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
						},
						968: {
							slidesPerView: 3,
						},
						1200: {
							slidesPerView: 4,
						},
					}}
					className={styles.mySwiper}
				>
					{reviews.map((review, index) => (
						<SwiperSlide key={index}>
							<div className={styles.card}>
								<div className={styles.cardHeader}>
									<div className={styles.avatar}></div>
									<div className={styles.cardInfo}>
										<div className={styles.name}>{review.name}</div>
										<div className={styles.cardStars}>
											{[1, 2, 3, 4, 5].map(star => (
												<span key={star} className={styles.star}>
													★
												</span>
											))}
										</div>
									</div>
									<div className={styles.cardIcon}>⋮</div>
								</div>
								<p className={styles.reviewText}>{review.text}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* <div className={styles.sliderControls}>
					<button
						className={`${styles.navButton} ${styles.navButtonPrev}`}
						onClick={() => swiperRef.current?.slidePrev()}
					>
						←
					</button>
					<div className={styles.swiperPagination}></div>
					<button
						className={`${styles.navButton} ${styles.navButtonNext}`}
						onClick={() => swiperRef.current?.slideNext()}
					>
						→
					</button>
				</div> */}
			</div>
		</section>
	)
}
