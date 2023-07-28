export default async function GetSettings() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_GET_SETTINGS}`, { next: { revalidate: 300 } })

  if (!res.ok) {
    return {
      appearance: {
        colors: {
          mainColor: '#000000',
          accentColor: '#FF810D',
          secondaryColor: '#727272',
          mainTextColor: '#FFFFFF',
          secondaryTextColor: '#000000'
        },
        fonts: {
          mainFont: 'Sans Pro',
          secondaryFonts: 'Roboto'
        },
        logo: 'https://svgshare.com/i/uNT.svg',
        text: 'Твій Кроссфіт'
      },
      navigation: [
        {
          title: 'Твій Кроссфіт',
          url: '#'
        },
        {
          title: 'Тренування',
          url: '#'
        },
        {
          title: 'Команда',
          url: '#'
        },
        {
          title: 'Команда',
          url: '#'
        },
        {
          title: 'Команда',
          url: '#'
        }
      ],
      contacts: {
        phone: '+380 095 285 08 92',
        email: 'Пн, Вт, Чт 19:20 Сб 11:00'
      },
      'header-social': [
        {
          title: 'facebook',
          url: '#',
          isShow: false
        },
        {
          title: 'instagram',
          url: '#',
          isShow: true
        },
        {
          title: 'youtube',
          url: '#',
          isShow: true
        }
      ],
      mainScreen: {
        title: {
          title: 'Welcome to MOV.space!',
          isShow: true
        },
        subtitle: {
          subtitle: 'Build your body',
          isShow: true
        },
        button: {
          button: 'Записатись'
        },
        appearance: {
          background: {
            color: '#000000',
            urlToMedia: 'https://i.imgur.com/lArjUtQ.jpg',
            type: 'image'
          }
        }
      }
    }
  }
  return await res.json()
}
