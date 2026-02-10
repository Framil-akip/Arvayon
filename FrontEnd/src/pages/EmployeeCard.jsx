import React from 'react';
import { useParams } from 'react-router-dom';
import { employees } from '../data/employees';
import {
    Phone,
    Mail,
    MapPin,
    Globe,
    Linkedin,
    Facebook,
    MessageCircle,
    Instagram,
    UserPlus,
    Briefcase,
    ChevronRight
} from 'lucide-react';

const EmployeeCard = () => {
    const { id } = useParams();
    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        return <div className="text-white text-center pt-20">Employee not found</div>;
    }

    const handleDownloadVcf = () => {
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${employee.name}
ORG:Arvayon Pro Build Studio;
TITLE:${employee.designation}
TEL;TYPE=CELL:${employee.phone}
EMAIL:${employee.email}
ADR;TYPE=WORK:;;${employee.address.replace(/,/g, ';')};;;;
URL:${employee.website}
END:VCARD`;
        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${employee.name.replace(/\s+/g, '_')}.vcf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-0 md:p-4 font-sans">
            <div className="w-full max-w-[400px] bg-white md:rounded-[30px] shadow-2xl overflow-hidden min-h-screen md:min-h-[850px] relative flex flex-col">

                {/* Header Section */}
                <div className="bg-gradient-to-b from-[#b09055] via-[#c6a868] to-[#e4c478] pt-12 pb-24 px-6 text-center relative shrink-0">
                    <h1 className="text-[26px] font-bold text-[#1a1a1a] mb-2 tracking-tight">{employee.name}</h1>
                    <p className="text-[#333333] text-[15px] font-medium leading-tight max-w-[80%] mx-auto opacity-90">{employee.designation}</p>
                </div>

                {/* Floating Action Buttons */}
                <div className="absolute top-[160px] left-0 right-0 flex justify-center gap-4 z-10 px-4">
                    {employee.phone && (
                        <a href={`tel:${employee.phone}`} className="w-[64px] h-[64px] bg-white rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#222] hover:text-[#C6A868] transition-colors">
                            <Phone size={24} strokeWidth={1.5} />
                        </a>
                    )}
                    {employee.email && (
                        <a href={`mailto:${employee.email}`} className="w-[64px] h-[64px] bg-white rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#222] hover:text-[#C6A868] transition-colors">
                            <Mail size={24} strokeWidth={1.5} />
                        </a>
                    )}
                    {employee.address && (
                        <a
                            href={`https://maps.google.com/?q=${encodeURIComponent(employee.address)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="w-[64px] h-[64px] bg-white rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#222] hover:text-[#C6A868] transition-colors"
                        >
                            <MapPin size={24} strokeWidth={1.5} />
                        </a>
                    )}
                </div>

                {/* Content Section */}
                <div className="flex-1 overflow-y-auto">
                    <div className="pt-24 pb-8 px-6 space-y-8">

                        {/* Contact Info List */}
                        <div className="space-y-6">
                            {employee.phone && (
                                <div className="flex items-start gap-5">
                                    <div className="w-[42px] h-[42px] rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                                        <Phone size={20} strokeWidth={1.5} />
                                    </div>
                                    <div className="pt-1">
                                        <p className="text-[11px] text-gray-400 font-medium mb-0.5">Phone</p>
                                        <a href={`tel:${employee.phone}`} className="text-[#1a1a1a] text-[15px] font-medium">
                                            +91 {employee.phone}
                                        </a>
                                    </div>
                                </div>
                            )}

                            {employee.email && (
                                <div className="flex items-start gap-5">
                                    <div className="w-[42px] h-[42px] rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                                        <Mail size={20} strokeWidth={1.5} />
                                    </div>
                                    <div className="pt-1 overflow-hidden">
                                        <p className="text-[11px] text-gray-400 font-medium mb-0.5">Email</p>
                                        <a href={`mailto:${employee.email}`} className="text-[#1a1a1a] text-[15px] font-medium break-all">
                                            {employee.email}
                                        </a>
                                    </div>
                                </div>
                            )}

                            {employee.address && (
                                <div className="flex items-start gap-5">
                                    <div className="w-[42px] h-[42px] rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                                        <MapPin size={20} strokeWidth={1.5} />
                                    </div>
                                    <div className="pt-1">
                                        <p className="text-[11px] text-gray-400 font-medium mb-0.5">Location</p>
                                        <p className="text-[#1a1a1a] text-[15px] font-medium leading-snug mb-3">
                                            {employee.address}
                                        </p>
                                        <a
                                            href={`https://maps.google.com/?q=${encodeURIComponent(employee.address)}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center px-4 py-1.5 bg-[#FFF9EA] text-[#E5C170] text-[11px] font-semibold rounded-full hover:bg-[#E5C170] hover:text-white transition-colors"
                                        >
                                            Show on Map
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* Company Section */}
                            <div className="flex items-start gap-5">
                                <div className="w-[42px] h-[42px] rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                                    <Briefcase size={20} strokeWidth={1.5} />
                                </div>
                                <div className="pt-1">
                                    <p className="text-[11px] text-gray-400 font-medium mb-0.5">Arvayon Pro Build Studio</p>
                                    <p className="text-[#1a1a1a] text-[16px] font-semibold leading-tight">{employee.designation}</p>
                                </div>
                            </div>
                        </div>

                        {/* Separator */}
                        <div className="h-px bg-transparent my-2"></div>

                        {/* Find me on */}
                        <div>
                            <h3 className="text-[17px] font-normal text-[#1a1a1a] mb-5">Find me on</h3>
                            <div className="space-y-4">
                                {employee.website && (
                                    <a href={employee.website} target="_blank" rel="noreferrer" className="flex items-center justify-between group py-1">
                                        <div className="flex items-center gap-4">
                                            <Globe size={28} className="text-[#1a1a1a]" strokeWidth={1.5} />
                                            <span className="text-[15px] text-[#1a1a1a] font-medium">Web</span>
                                        </div>
                                        <ChevronRight size={20} className="text-gray-300" />
                                    </a>
                                )}
                                {employee.instagram && (
                                    <a href={employee.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-between group py-1">
                                        <div className="flex items-center gap-4">
                                            <div className="text-[#E4405F]">
                                                <Instagram size={28} strokeWidth={1.5} />
                                            </div>
                                            <span className="text-[15px] text-[#1a1a1a] font-medium">Instagram</span>
                                        </div>
                                        <ChevronRight size={20} className="text-gray-300" />
                                    </a>
                                )}
                                {employee.whatsapp && (
                                    <a href={employee.whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-between group py-1">
                                        <div className="flex items-center gap-4">
                                            <div className="text-[#25D366]">
                                                <MessageCircle size={28} strokeWidth={1.5} />
                                            </div>
                                            <span className="text-[15px] text-[#1a1a1a] font-medium">WhatsApp</span>
                                        </div>
                                        <ChevronRight size={20} className="text-gray-300" />
                                    </a>
                                )}
                                {employee.linkedin && (
                                    <a href={employee.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between group py-1">
                                        <div className="flex items-center gap-4">
                                            <div className="text-[#0A66C2]">
                                                <Linkedin size={28} strokeWidth={1.5} />
                                            </div>
                                            <span className="text-[15px] text-[#1a1a1a] font-medium">LinkedIn</span>
                                        </div>
                                        <ChevronRight size={20} className="text-gray-300" />
                                    </a>
                                )}
                                {employee.facebook && (
                                    <a href={employee.facebook} target="_blank" rel="noreferrer" className="flex items-center justify-between group py-1">
                                        <div className="flex items-center gap-4">
                                            <div className="text-[#1877F2]">
                                                <Facebook size={28} strokeWidth={1.5} />
                                            </div>
                                            <span className="text-[15px] text-[#1a1a1a] font-medium">Facebook</span>
                                        </div>
                                        <ChevronRight size={20} className="text-gray-300" />
                                    </a>
                                )}
                            </div>
                        </div>
                        {/* Space for fixed footer */}
                        <div className="h-16"></div>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 bg-white border-t border-gray-50/50">
                    <button
                        onClick={handleDownloadVcf}
                        className="w-full bg-[#EACC7F] text-[#1a1a1a] text-[15px] font-medium py-3.5 rounded-xl flex items-center justify-center gap-2.5 hover:bg-[#e0c070] transition-colors"
                    >
                        <UserPlus size={20} strokeWidth={1.5} />
                        Add Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeCard;
