import React, { Component } from 'react';
import ResponsiveGrid from '../ResponsiveGrid';
import FetchError from '../FetchError';
import { DatasetPanel } from './components/DatasetPanel';
import { Header } from 'semantic-ui-react';

class Datasets extends Component {
	render() {
		const { 
			datasets,
			isFetching,
			errorMessage,
			fetchDatasets
		} = this.props;

		if(errorMessage && !datasets.size) {
			return (
				<FetchError 
					message={errorMessage}
					onRetry={() => fetchDatasets()}
				/>
			);
		} else if(isFetching && !datasets.size) {
			return (
				<Header 
					inverted 
					size="small"
					content="Retrieving your datasets..."
				/>
			);
		} else if(!isFetching && !datasets.size) {
			return (
				<Header 
					inverted 
					size="small"
					content="You have no datasets uploaded yet."
				/>
			);
		}
			
		return (
			<ResponsiveGrid
				mobile={1}
				tablet={2}
				desktop={3}
				lgscreen={4}
			>
				{datasets.entrySeq().map(([id, dataset]) =>
					<DatasetPanel
						key={id}
						dataset={dataset}
					/>
				)}
			</ResponsiveGrid>
		);
	}
}

export default Datasets;