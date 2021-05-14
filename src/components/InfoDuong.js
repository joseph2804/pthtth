function InfoDuong() {
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
                            <div className="portlet-body mt-5">
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
                                                    <label className="col-xs-6">MSSV: <span className="bold">16033971</span></label>
                                                </div>
                                                <div className="form-group" style={{}}>
                                                    <label className="col-xs-6">Họ tên: <span className="bold">Phạm Hải Đường</span></label>
                                                </div>
                                                <div className="form-group" style={{}}>
                                                    <label className="col-xs-6">Giới tính: <span className="bold">Nam</span></label>
                                                </div>
                                                <div className="form-group" style={{}}>
                                                    <label className="col-xs-6">Ngày sinh: <span className="bold">07/05/1998</span></label>
                                                </div>
                                                <div className="form-group" style={{}}>
                                                    <label className="col-xs-6">Nơi sinh: <span className="bold">Tỉnh Thanh Hóa</span></label>
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
export default InfoDuong;