import React from 'react';
import {
	FaRegHandshake,
	FaBed,
	FaPhone,
	FaMapMarkerAlt,
} from 'react-icons/fa';
import { FaPeopleRoof } from 'react-icons/fa6';

const AboutCards = () => {
	return (
		<div className="flex flex-wrap justify-center">
			<div className="max-w-xs mx-2 my-4 bg-white rounded-lg shadow-lg overflow-hidden">
				<div className="p-4 text-center justify-center items-center flex flex-col">
					<div className="flex items-center justify-center w-40 h-40 p-5 border-[#232E5D] border-4 rounded-full bg-gray-200">
						<FaRegHandshake
							// size={150}
							className="text-gray-600 h-32 w-40  text-[#232E5D]"
						/>
					</div>

					<p className="text-gray-700 mt-3">
						We can assist you with getting out of bed in the
						morning, bathing and dressing, etc. We can cook
						you a light breakfast or lunch or dinner. We can
						make you a cup of tea and prompt you to take
						your medication.
					</p>
				</div>
			</div>
			<div className="max-w-xs mx-2 my-4 bg-white rounded-lg shadow-lg overflow-hidden">
				<div className="p-4 text-center justify-center items-center flex flex-col">
					<div className="flex items-center justify-center w-40 h-40 p-5 border-[#232E5D] border-4 rounded-full bg-gray-200">
						<FaBed
							// size={150}
							className="text-gray-600 h-32 w-40  text-[#232E5D]"
						/>
					</div>

					<p className="text-gray-700 mt-3">
						We can provide someone with you in your home on
						a 24 hour basis to help with all of your care
						needs during the day and night. They will assist
						you with your personal care, prompt medication,
						do light housework and other duties.
					</p>
				</div>
			</div>
			<div className="max-w-xs mx-2 my-4 bg-white rounded-lg shadow-lg overflow-hidden">
				<div className="p-4 text-center justify-center items-center flex flex-col">
					<div className="flex items-center justify-center w-40 h-40 p-5 border-[#232E5D] border-4 rounded-full bg-gray-200">
						<FaPeopleRoof
							// size={150}
							className="text-gray-600 h-32 w-40  text-[#232E5D]"
						/>
					</div>

					<p className="text-gray-700 mt-3">
						We can provide carers to sit with you for a few
						hours each day. This is popular with family
						members who are the main care givers but require
						some time out to go shopping or have a break
						from their care delivery.
					</p>
				</div>
			</div>
			<div className="max-w-xs mx-2 my-4 bg-white rounded-lg shadow-lg overflow-hidden">
				<div className="p-4 text-center justify-center items-center flex flex-col">
					<div className="flex items-center justify-center w-40 h-40 p-5 border-[#232E5D] border-4 rounded-full bg-gray-200">
						<FaPeopleRoof
							// size={150}
							className="text-gray-600 h-32 w-40  text-[#232E5D]"
						/>
					</div>

					<p className="text-gray-700 mt-3">
						We can provide carers to sit with you for a few
						hours each day. This is popular with family
						members who are the main care givers but require
						some time out to go shopping or have a break
						from their care delivery.
					</p>
				</div>
			</div>

			{/* Repeat similar structure for other cards */}
		</div>
	);
};

export default AboutCards;
