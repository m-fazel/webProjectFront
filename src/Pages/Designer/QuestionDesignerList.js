import React, { useEffect } from 'react';
import NavbarDesigner from '../../Components/NavbarDesigner'; // Import NavbarDesigner
import { Link } from 'react-router-dom'; // Import Link component for navigation

function QuestionDesignerList() {

  useEffect(() => {
    document.title = "سامانه پروژه سوال پیچ | مدیریت سوالات | طراح"
  }, []);

  return (
    <div>
      <NavbarDesigner /> {/* Include NavbarDesigner */}

      <div class="container pt-4">
        {/* Add Question Button */}
        <div class="mb-4">
          <Link to="/question-designer-add" class="btn btn-primary">افزودن سوال جدید</Link>
        </div>

        {/* Questions Table */}
        <h4 class="mb-4">سوالات طراحی شده</h4>
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="col-1">#</th>
              <th class="col-6">صورت سوال</th>
              <th>تعداد پاسخ های صحیح</th>
              <th>تعداد پاسخ های غلط</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>html چیست؟</td>
              <td>20</td>
              <td>10</td>
              <td>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#question-1-similar">
                  انتخاب سوالات مشابه
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>css چیست؟</td>
              <td>10</td>
              <td>15</td>
              <td>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#question-2-similar">
                  انتخاب سوالات مشابه
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal for Question 1 */}
      <div class="modal fade" id="question-1-similar" tabIndex="-1" aria-labelledby="question-1-similar" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <form action="" method="post">
              <div class="modal-header">
                <h5 class="modal-title">افزودن سوالات مشابه</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <b>html چیست؟</b>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="question-2-1" />
                  <label class="form-check-label" htmlFor="question-2-1">
                    css چیست؟
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="question-2-3" />
                  <label class="form-check-label" htmlFor="question-2-3">
                    سوال از طراح دیگر
                  </label>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">خروج</button>
                <button type="submit" class="btn btn-primary">ذخیره</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal for Question 2 */}
      <div class="modal fade" id="question-2-similar" tabIndex="-1" aria-labelledby="question-2-similar" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <form action="" method="post">
              <div class="modal-header">
                <h5 class="modal-title">افزودن سوالات مشابه</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <b>css چیست؟</b>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="question-2-1" />
                  <label class="form-check-label" htmlFor="question-2-1">
                    html چیست؟
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="question-2-3" />
                  <label class="form-check-label" htmlFor="question-2-3">
                    سوال از طراح دیگر
                  </label>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">خروج</button>
                <button type="submit" class="btn btn-primary">ذخیره</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionDesignerList;
