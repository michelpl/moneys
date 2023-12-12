<Box>
            <Paper>
                <Grid container spacing={1} sx={{ marginBottom: 2 }}>
                    <Grid xs={12} padding={1} textAlign={'center'}><h3>{data.modelLabel}</h3></Grid>
                    <Grid xs={1}>
                        <Item>Id</Item>
                    </Grid>
                    <Grid xs={4}>
                        <Item>Descrição</Item>
                    </Grid>
                    <Grid xs={2}>
                        <Item>Valor</Item>
                    </Grid>
                    <Grid xs={4}>
                        <Item>Categorias</Item>
                    </Grid>
                    <Grid xs={1}>
                        <Item align='center'>Ações</Item>
                    </Grid>
                    <Grid xs={12}>
                        <Divider />
                    </Grid>
                </Grid>
                {rows.map((row, order) => (
                    <Grid container spacing={1} sx={{ marginBottom: 2 }} key={order}>
                        <Grid xs={1}>
                            <Item>{order + 1}</Item>
                        </Grid>
                        <Grid xs={3}>
                            <Item>{row.description}</Item>
                        </Grid>
                        <Grid xs={2}>
                            <Item>R$ {parseFloat(row.value).toFixed(2)}</Item>
                        </Grid>
                        <Grid xs={4}>
                            <Item>
                                {row.categories.map((data, order) => {
                                    let icon;
                                    if (data.icon !== null && data.icon !== '') {
                                        icon = <AddCircleIcon />;
                                        return (
                                            <Chip
                                                icon={icon}
                                                key={order}
                                                color='primary'
                                                label={data.label}
                                                sx={{ marginRight: '5px', backgroundColor: data.color }}
                                            />
                                        );
                                    } else {
                                        let avatar;
                                        avatar = <Avatar src={"/logos/" + data.id + ".png"} />
                                        return (
                                            <Chip
                                                avatar={avatar}
                                                key={order}
                                                color='primary'
                                                label={data.label}
                                                sx={{ marginRight: '5px', backgroundColor: data.color }}
                                            />
                                        );
                                    }
                                })}
                            </Item>
                        </Grid>
                        <Grid xs={1}>
                            <Item align='right'>
                                <Tooltip title="Delete">
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteData(row._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </Item>
                        </Grid>
                        <Grid xs={12}>
                            <Divider />
                        </Grid>
                    </Grid>
                ))}

                <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    id="amount"
                                    type="number"
                                    min="0.00"
                                    label="Valor"
                                    width='100%'
                                    onChange={
                                        (e) => { setAmount(parseFloat(e.target.value).toFixed(2)); }
                                    }
                                    onKeyUp={
                                        (e) => {
                                            if (e.key === "Enter") {
                                                saveData()
                                            }
                                        }
                                    }
                                >
                                </TextField>
                            </Grid>
                            <Grid item xs={2}>
                                <MyCategories categoryList={categoryList} saveData={saveData} />
                            </Grid>
                            <Grid item xs={2} >
                                <Tooltip title="Salvar">
                                    <IconButton aria-label="save"
                                        onClick={() => saveData()}
                                        sx={{ padding: '0', marginTop: '0' }}
                                    >
                                        <AddCircleIcon fontSize='large' />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Box>
                    <Card sx={{ width: '100%', marginTop: '15px' }} >
                        <CardContent className='bottomCard'>
                            <p className='p1'>Total: R$ {totalAmount}</p>
                            <p className='p2'>Número de registros: {rows.length}</p>
                        </CardContent>
                    </Card>
            </Paper>
        </Box>