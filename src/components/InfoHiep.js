function InfoHiep() {
    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-8">
                <div className="box-df profile-ds-info">
                    <div className="portlet">
                        <div className="portlet-title mb-5">
                            <h1 className="text-center">
                                Thông tin sinh viên
                           </h1>
                        </div>
                        <div className="portlet-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="profile-userpic">
                                        <img src="data:image/png;base64,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" className="img-responsive" style={{ objectFit: 'cover' }} />
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group" style={{}}>
                                                <label className="col-xs-6">MSSV: <span className="bold">16034681</span></label>
                                            </div>
                                            <div className="form-group" style={{}}>
                                                <label className="col-xs-6">Họ tên: <span className="bold">Đặng Duy Hiệp</span></label>
                                            </div>
                                            <div className="form-group" style={{}}>
                                                <label className="col-xs-6">Giới tính: <span className="bold">Nam</span></label>
                                            </div>
                                            <div className="form-group" style={{}}>
                                                <label className="col-xs-6">Ngày sinh: <span className="bold">08/03/1998</span></label>
                                            </div>
                                            <div className="form-group" style={{}}>
                                                <label className="col-xs-6">Nơi sinh: <span className="bold">Tỉnh Kon Tum</span></label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group" style={{}}>
                                                <label className="col-xs-6">Lớp học: <span className="bold">DHCNTT12A</span></label>
                                            </div>
                                            <div className="form-group" style={{}}>
                                                <label className="col-xs-6">Khóa học: <span className="bold">2016 - 2017</span></label>
                                            </div>
                                            <div className="form-group" style={{}}>
                                                <label className="col-xs-6">Bậc đào tạo: <span className="bold">Đại học</span></label>
                                            </div>
                                            <div className="form-group" style={{}}>
                                                <label className="col-xs-6">Loại hình đào tạo: <span className="bold">Chính quy</span></label>
                                            </div>
                                            <div className="form-group" style={{}}>
                                                <label className="col-xs-6">Ngành: <span className="bold">Công nghệ thông tin </span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <form className="form-horizontal">
                                        <div className="form-body">
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    );
}
export default InfoHiep;