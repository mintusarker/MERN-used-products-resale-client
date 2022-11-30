import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';

const ReportedItem = () => {


    const { data: reports = [], isLoading, refetch } = useQuery({
        queryKey: ['report'],
        queryFn: async () => {
            const res = await fetch('https://used-products-resale-server-alpha.vercel.app/report');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteReport = id => {
        fetch(`https://used-products-resale-server-alpha.vercel.app/report/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Report deleted successfully')
                }
            })
    };

    if (isLoading) {
        return <Loading></Loading>
    };

    return (
        <div>
            <h2 className='text-2xl'>Reported item</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className='text-blue-600 font-bold'>
                                <th></th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Report</th>
                                <th>Reporter EMail</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reports.map((report, i) => <tr>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="w-24 rounded">
                                            <img src={report?.image} alt='' />
                                        </div>
                                    </td>
                                    <td>{report?.itemName}</td>
                                    <td>{report?.message}</td>
                                    <td>{report?.email}</td>
                                    <td><button onClick={() => handleDeleteReport(report?._id)} className='btn btn-sm btn-warning'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReportedItem;

