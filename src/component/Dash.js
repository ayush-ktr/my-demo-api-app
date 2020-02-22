import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
const styles = theme => ({
	cardStyle: {
		height: '35vh'
	}
});
class Dash extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Grid container spacing={3}>
					<Grid
						item
						container
						xs={12}
						spacing={3}
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} lg={12} md={12}>
							<Card className={classes.cardStyle}>
								<CardHeader action="Task Of the Day" />
								<CardContent>hello</CardContent>
							</Card>
						</Grid>
					</Grid>
					<Grid item container xs={12} spacing={3}>
						<Grid item xs={6}>
							<Card className={classes.cardStyle}>
								<CardHeader title="Classes Today" />
								<CardContent>hello</CardContent>
							</Card>
						</Grid>
						<Grid item xs={6}>
							<Card className={classes.cardStyle}>
								<CardHeader title="Attendance" />
								<CardContent>hello</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}
export default withStyles(styles)(Dash);
