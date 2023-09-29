import * as React from 'react';
import {Card, Modal, TextField, Grid, Button, Typography} from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    boxShadow: 24,
    borderRadius: "8px",
    padding: "24px 16px",
};

export default function CreateRequestForm({ open, setOpen }: any) {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Card sx={{ ...style }}>
                <Grid container spacing={2} dir="rtl">
                    <Grid item xs={6}><TextField fullWidth label="تاریخ ورود" variant="outlined" /></Grid>
                    <Grid item xs={6}><TextField fullWidth label="شماره قبض" variant="outlined" /></Grid>
                    <Grid item xs={6}><TextField fullWidth label="مبلغ" variant="outlined" /></Grid>
                    <Grid item xs={6}><TextField fullWidth label="نام" variant="outlined" /></Grid>
                    <Grid item xs={6}><TextField fullWidth label="دستگاه" variant="outlined" /></Grid>
                    <Grid item xs={6}><TextField fullWidth label="بیعانه" variant="outlined" /></Grid>
                    <Grid item xs={6}><TextField fullWidth label="تاریخ خروج" variant="outlined" /></Grid>
                    <Grid item xs={6}><TextField fullWidth type="tel"  label="تلفن" variant="outlined" /></Grid>
                    <Grid item xs={12}><TextField fullWidth label="توضیحات" variant="outlined" /></Grid>
                    <Grid item xs={6}><Button variant="contained" fullWidth size="large"><Typography variant="title1">ثبت</Typography></Button></Grid>
                    <Grid item xs={6}><Button variant="outlined" fullWidth size="large"  onClick={() => handleClose()}><Typography variant="title1">لغو</Typography></Button></Grid>
                </Grid>
            </Card>
        </Modal>
    );
}
