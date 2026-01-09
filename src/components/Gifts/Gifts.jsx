import { useState, useEffect } from 'react';

import { LOCAL_STORAGE_KEYS, URLS } from '@/constants';
import utils from '@/utils';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import JP05 from '@/assets/leads/jp_1200_628-05.jpg';
import JP07 from '@/assets/leads/jp_1200_628-07.jpg';
import EW01 from '@/assets/leads/aw-01-526-x-670-px-1300-x-1300-px-2.png';


// Dynamic content - can be changed monthly/weekly
const giftsContent = [
    {
        id: `ws-jp-01`,
        url: 'https://track.wesell.co.il/click/WLHk58kmUGMZ3PR/DEmD5tTAEUaLPZ5/TsWLHk58kmUGMZ3PRtS',
        img: JP05,
        title: `בואו ללמוד אנגלית עם הג'רוזלם פוסט Lite-Talk`,
        content: [
            '​מורה פרטי לאנגלית בטלפון, בכל שעה ומכל מקום',
            // `מותאם ל: גיל 18 ומעלה,  דוברי אנגלית בסיסית`
        ],
        footer: `מותאם ל: גיל 18 ומעלה,  דוברי אנגלית בסיסית`
    },
    {
        id: `ws-jp-02`,
        url: 'https://track.wesell.co.il/click/WLHk58kmUGMZ3PR/DEmD5tTAEUaLPZ5/TsWLHk58kmUGMZ3PRtS',
        img: JP07,
        title: 'יש לנו המלצה בשבילך!',
        content: [
            '​מורה פרטי לאנגלית בטלפון, בכל שעה ומכל מקום',
            // `מותאם ל: גיל 18 ומעלה,  דוברי אנגלית בסיסית`
        ],
        footer: `מותאם ל: גיל 18 ומעלה,  דוברי אנגלית בסיסית`
    },
    {
        id: `af-ew-01`,
        url: 'https://track.affiracle.com/l/LS6pPeN7gKEZ3FhuRYLWaV',
        img: EW01,
        title: `הדרך הקצרה לדיבור באנגלית שוטפת
תוך 90 יום בלבד!`,
        content: [
            `למדו אנגלית בשיטה חדשה עם מורים פרטיים אונליין שמותאמים בדיוק לכם`,
            'קבעו עכשיו שיעור נסיון חינם',
        ]
    }
];

function Gifts({ className }) {
    const [currentGift, setCurrentGift] = useState(null);

    useEffect(() => {
        // For now - move to af-ew if ws blocked
        updateUrlByBlocked();
    }, []);

    const updateUrlByBlocked = async () => {
        const blocked = await utils.isMainstreamAdsBlocked();
        if (blocked) setCurrentGift(giftsContent[2]);
        else setCurrentGift(giftsContent[0]);   // Select first gift as default
    }

    const handleClick = async (url, id) => {
        lsUpdateOpened(id);

        // Send to server route /gift with the gift id + init id
        const initId = utils.isLocalhost() ? "localhost" : localStorage.getItem(LOCAL_STORAGE_KEYS.INIT);

        try {
            await fetch(`${URLS.PROD_SERVER_URL}/gift?initId=${initId}&giftId=${id}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error('Error sending gift click to server:', error);
        }

        // Redirect to the url in blank
        window.open(url, '_blank');
    };

    const lsUpdateOpened = (id) => {

        let giftsOpened;
        try {
            giftsOpened = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.GIFTS_OPENED));
            if (!giftsOpened || typeof giftsOpened !== 'object') {
                giftsOpened = {};
            }
        } catch (e) {
            giftsOpened = {};
        }

        if (!giftsOpened[id]) {
            giftsOpened[id] = [];
        }

        const now = new Date();
        giftsOpened[id].push({ timestamp: now.getTime(), date: now.toISOString() });

        localStorage.setItem(LOCAL_STORAGE_KEYS.GIFTS_OPENED, JSON.stringify(giftsOpened));
    };

    if (!currentGift) return null;

    return (
        <Box className={className}>
            <Card className="gift-card">
                <CardActionArea onClick={() => handleClick(currentGift.url, currentGift.id)}>
                    {/* <CardHeader title={currentGift.title}/> */}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                        {currentGift.img && (
                            <CardMedia
                                sx={{
                                    width: { md: '35%' },
                                    maxHeight: { md: '300px' },
                                    objectFit: { md: 'cover' }
                                }}
                                component="img"
                                image={currentGift.img}
                                alt={currentGift.title}
                                className="gift-card-image"
                            />
                        )}
                        <CardContent className="gift-card-content">
                            <Typography gutterBottom variant="h6" component="div" className="gift-card-title">
                                {currentGift.title}
                            </Typography>
                            {currentGift.content.map((line, index) => (
                                <Typography key={index} variant="body2" className="gift-card-line">
                                    {line}
                                </Typography>

                            ))}
                            <Typography color="text.secondary" className="gift-card-footer">
                                {currentGift.footer}
                            </Typography>
                        </CardContent>
                    </Box>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default Gifts;
