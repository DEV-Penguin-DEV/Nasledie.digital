import AbstractView from './abstract-view';

const circleBaseTemplate = () => (`
<section class="circles">
  <header class="circles-header">
    <nav class="circles-header__navigation navigation">
      <ul class="circles-header__view-list view-list circles-header__list navigation__item">
        <li class="view-list__item">
          <button class="view-list__button">
            <svg class="view-list__icon" width="26" height="26" viewBox="0 0 26 26" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="13" r="8.5" stroke="#548677" />
              <circle cx="13" cy="13" r="12.5" stroke="#548677" />
            </svg>
          </button>
        </li>

        <li class="view-list__item">
          <button class="view-list__button">
            <svg class="view-list__icon" width="26" height="26" viewBox="0 0 26 26" fill="none"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="26" height="26" fill="url(#pattern01)" fill-opacity="0.5" />
              <defs>
                <pattern id="pattern01" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_591_190712" transform="scale(0.00195312)" />
                </pattern>
                <image id="image0_591_190712" width="512" height="512"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABa3SURBVHic7d1r8G13Xd/x90lCICQI0RICwQS5mIBEh0Iod+VSL2OFWgUUI7ROtcXRdmSm0wfttNpxxk7bUUdFGR90lNE6QLVYZWoBUctVpJQRwQjExohTkUIQArlAevpgkalaOOckZ6/923v9Xq+Z79Pf73v2Wv/v/py911q7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHbjxOgGDtCl1TOqp1RXVY+oLqwuHtnUEbqpurl6f3Vd9abqDdWHRja1Qyeqq6unV9dUV1ZXVPduOV+AcbY+f9ihe1Yvqn6juqM6qVapO1r+CF9YnX9GR+bwXFZ9f3V9419PpdSZ1xbmDzt0XvU91Qcbf3LOVjdWL67OPe1ROgyXVi+rbm38a6eUOrs6tvnDjl1TvavxJ+Ls9c7qsac5ViOdqL67+ljjXyul1G7r0OcPK/i+6rbGn3xqqduqf3TKIzbGxdWrG//6KKXWq0OdP6ub7eOPc6ufrP5Z8/3bD9m51ddVl1S/1vJHOdoDq9dXXzm6EWBVhzh/9mKmN8FzqpdX3zG6ET6va6qHtvyve6TLqje3XNkPzOFQ5s/ezBQAfqT6ztFNcFpfUV1UvXbQ/he3XCn8pYP2B8YZPX/2apYA8Pzq341ugjP2pOoD1bv3vO+J6uerp+15X+BwjJo/ezfDg4C+pPrdllTH8fh4y4N2btzjnt9dvXSP+wGHacT82bsZPgF4ecuB5Ljcs3pI9Yo97feA6j9V99rTfsDh2vf8GeKc0Q2s7JnVN4xugrvtG9vfVfg/UN1vT3sBh2+f82eIrX8F8BvVV41ugrPy+upvrrzHA6s/zP/+gb9sH/NnmC1/AvCovPlvwbOqR6+8xz/Imz/w/9vH/BlmywHgRaMbYGdesOLaJ6prV1wfOG5rzp+hthwA/vboBtiZ56y49tXVw1ZcHzhua86fobYaAB6UB7lsyaNajukanrHSusA2rDl/htpqAHj86AbYubV+setxK60LbMcmfzFwqwHAM9y3Z61jetVK6wLbscn3lK0GgC8e3QA7d/lK6z54pXWB7Vhr/gy11QDgsb/bc58jWxfYjk3OifNGN7CSe6+w5tuqH15h3S16SfWEHa954Y7Xu9MFK6z5wy3nC7B/xzR/htpqAFjDH1evGt3EkXhuu/8DXMsaT8N8W84VGOWY5s9QW/0KAAA4BQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwofNGN7CS21dY87nVyRXW5czcttK6t1fn73jNV+54PWCstebPUFv9BODm0Q2wc59YaV3nCnA6a82fobYaAP5sdAPs3FrH1LkCnM4m58RWA8D7RjfAzv3BSus6V4DTWWv+DLXVAPC7oxtg59690rrOFeB01po/Q201ALy7+t+jm2Bn/qx6z0pr/+ZK6wLbsOb8GWqrAeBk9drRTbAzr229OzDe0kYv8AF2Ys35M9RWA0DVz49ugJ35uRXXvqX6xRXXB47bmvNnqBOjG1jRedUHqitGN8JZuaF6eHXHins8qXrziusDx+mG1p8/w2z5E4DPVP92dBOctR9q/T++t1S/tfIewPHZx/wZZsufAFTdq/q96mGjG+FueV91des82fGvenL1xrb/NwGcmX3OnyHOHd3Ayj5Tvb/6ttGNcLd8a8vx24c/bvm66DF72g84bPucP0Ns+SuAO/2X6qdHN8Fd9tLqdXve8yXVH+55T+DwjJg/ezfLx50XVG+q/vroRjgjb6+e1pgf4Hhcy/UA9x6wNzDeyPmzVzN8AlDLrV5f20Yf57gx11fPbtwf3zuq57V8fQTMZfT82atZAkDVh6uvrq4b3Qif13urp1cfGtzHa6rnV7cO7gPYn0OZP3szUwCourF6Sh7/eoh+vXpqy8V4h+CXqq9pomEAEzu0+bMXswWAqo9Uz6r+VfXpwb2wHIN/2fJm+9HBvfxV/63lroDXj24EWMUhzx9W9mUtye+kGlKvrR552qN0GF7Q8r+D0a+ZUmo3dUzzhxU9tfrPLWlw9Em59bq9+uWWB+8cm/Or72r5tcnRr6NS6q7XMc+fnZvlNsAzdUn1TdUzW64VeMDYdjbjT1tuw/z1lh/e+fDYdnbiMdVzqmdUj81tg3Cotjh/dkIAOLUvbHmM8H2r++X1OlMnq499tq6vbhrbzupOVJd/ti76bAFjzDZ/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgL/ixOgGDtwXVY+oLqouHtzLsbmpurl6f/WRwb2s7Zzqiury6sLPFjDOTPPnbhMA/rJLq2+qnlk9pbr/2HY248PVG6tfr36x+tDYdnbicdWzq2dUj63uNbYd4PPY4vxhh76q+tXqM9VJtWp9uvqV6mlncmAOzD2rF1fvafzrqJS663XM84cd+/Lqtxp/Us5ab6gefdqjNN6J6oXVnzT+NVNK7aaOZf6wY+dVP9iSBkefhLPX7dUPVOee8oiNc1nLoBj9Oimldl+HPn9WNeM1APdv+R7oqaMb4S/5zeqbO6wLdp5evSLXgsDW/WaHN39WN1sAuKL6r9WVoxvhc7qu+prqxtGNtFwM+vMt3/sD23dI82cvZgoA96/eVH3p6EY4petb7sD404E9fEP1Sy1fFQHzOIT5szezBIALqjdXjxndCGfkHS1f0dw6YO/Ht3wceMGAvYHxRs6fvZrlwoefqr5+dBOcsQe1PITpNXve937V6/KdP8xs1PzZuxk+Afj6lnv8OT5f23LNxr78TPWiPe4HHK59z5+923oAuKD6veqhoxvhbnl/dXV12x72emrLMyG2/jcBnJl9zp8htv4VwIurF4xugrvti1oevvOOPez1cy13iQDUfufPEFv+3855LVd0Xj66Ec7KDS0/yPSZFfd4cssdIgB/0Q2tP3+GOWd0Ayv62rz5b8FDqmetvMd3rrw+cJwe0vrzZ5gtB4BvG90AO3PtimtfUP2dFdcHjtua82eorX4FcE7LTz7+tdGNsBMfrh7Q8uzuXXtWy61/AJ/LmvNnqK1+AnB13vy35P6t96tdX7nSusA2rDl/htpqAPjy0Q2wc1evtK5zBTidtebPUFsNAJ73vz1r/YCTcwU4nU3+gNxWA4BHuW7PWsf0kpXWBbZjk+8pWw0AF41ugJ27z0rrOleA01lr/gy11QBw/gprvqrlrgl1+nrV3XyNT+WeK6xZ65wrz2v8MVBq1jqm+TPUVgMAAHAKAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBC541u4Ih8cfXc0U0ciS8e3cBdcLI6seM1n7Dj9YAzd0zzZ6itBoBPrbDmE6pXrrAuZ+aTK617S3XvHa/5kh2vB4y11vwZaqtfAXxidAPs3FrH1LkCnM4m58RWA8Afj26AnfujldZ1rgCns9b8GWqrAeAPRjfAzr1vpXWdK8DprDV/htpqAHj76AbYqZPV76y09lrrAtuw5vwZaqsB4H/lf3Zb8t7qT1da+w0rrQtsw5rzZ6itBoCqV49ugJ355RXXfncb/XgP2Ik1589QWw4ALx/dADvzH1Ze/xdWXh84XmvPn2G2HADem493t+B11XtW3uNlLc8DAPiL9jF/hjl3dAMr+2D1otFNcFb+XnXjynvcXF1WXbPyPsBx2cf8GWbXj0A9RL9cPXt0E9wtv1h98572ekD1+9XFe9oPOGz7nD9DzBAAHlL9bnWfwX1w13y8enT7fVDPP6x+ao/7AYdpxPzZuy1fA3CnG6q/P7oJ7rIXt/8/vpdVv7TnPYHDM2L+7N3WrwG403uq+1ZPHN0IZ+TfVD8yaO/XVn+rumTQ/sBYI+fPXs3wFcCdTrTcGnjt6EY4pZ9tufDm5MAeLqveWH3JwB6A/TuE+bM3M3wFcKeT1QubJNkdqZdW39H4P74/qZ5cvWtwH8D+HMr8YWXfW93acqDV+Lq1+u5THrEx7lv9x8a/Pkqp9epQ5w8remz1zsaffLPXO6rHnOZYjfZd1Ucb/1oppXZbxzB/WMm5Lbd+/VHjT8TZ6oaWN9Zj+RrqkuonWp4YOPq1U0qdXd3Qcc0fVnR+9e3V66s7Gn9ybrXuaHm05rXVPc7oyByeB1b/onp/419PpdSZ1xbmz07NdBfAmbqkenr1lOqR1cNavgv2hLi75qbqz6sPVNe1XFX/G9WHRza1Y19WPaPlEcJXVpdXF322gHFmmD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCdToxu4EBdWD2+uqp6RHVRdb+hHR2fj1U3V++rrqveXn1qaEfreFDLufKl1RUt5869h3YEzDJ/zooA8P98YfWt1fOqJ1Tnj21nc26v3lq94rP10bHtnJVHV99ePae6cnAvwOltaf6wQ1dUL61uqU6qvdQt1U9Ul5/B8Tkkz6ze0PjXTyl19+tY5w87dH71T/PGP7I+VX1/da9TH6rhHly9qvGvl1Jqd3Us84cdu7J6V+NPQLXUe6ovO+URG+fa6hONf42UUuvUIc8fduzrMtAPsT5effUpjtu+nVP9aONfF6XU+nVo84cVPL/lYpDRJ5v63HVb9dzPe/T259zq5xr/eiil9leHMn/2Zqa7AJ5VvSZX9x+6T1fPrn5tYA8/Vn3vwP2BMQ5h/uzNLAHgqup3Wu7n5/B9vHpc9f4Be39f9cMD9gUOw8j5s1czBIB7tTwE4urRjXCXvKvleQy37XHPa6o35VMimN2I+bN3545uYA/+ecvDfTgul1a3Vm/c037nVr9SXban/YDDte/5M8TWPwG4ouUxkO7zPE6farll84N72Ot7qh/fwz7Acdjn/Bli658A/FD1xNFNcLfdozqv9S/IuUfL40Hvu/I+wPHY1/wZZsufAHxRS3Lzv//jdkvLx/I3rbjHi6qfWXF94DjtY/4Mc87oBlb0LXnz34ILWv8ajr+78vrAcdrH/BlmywFgswdtQs9fce1Lq6etuD5w3NacP0NtNQDcu+UWDrbhyS3HdA3PaLt/B8DZW3P+DLXVwfc3ci/3lpzfco/+Gp680rrANqw5f4baagB45OgG2LmrVlr3USutC2zHWvNnqK0GgIeNboCde/hK6z50pXWB7Vhr/gy11QDgfu7tWeuY3m+ldYHt2OR7ynmjG1jJGj/688HqrSusu0VPrB684zXvs+P17nThCmu+tQ0/PQwO3DHNH1bwynb/W9Gv3Ou/4Lgd0+u/xu+KT/Wb4nBgjmn+DLXVrwAAgFMQAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABM6b3QDK/k/K6z5xOqVK6y7RU9cYc07VljzznXP3fGa31c9d8drAmfmmObPUFsNADevsOaDM9RH+sRK636y+oIdr7nGAALGWWv+DLXVrwA+NroBdm6tY+pcAU5nk3NiqwHg+tENsHMfWGld5wpwOmvNn6G2GgB+f3QD7Nx1K63rXAFOZ635M9RWA8Dbq9tGN8HO3Fb9zkprv2mldYFtWHP+DLXVAPCp6m2jm2Bn3lzdstLab2idu0aAbVhz/gy11QBQ9YrRDbAzax7LD1W/teL6wHHb7HvJidENrOgLqw9WF4xuhLNyS3VZddOKe7yw+tkV1weO0z7mzzBb/gTgo9W/H90EZ+2nW/+P7xeqP1p5D+D47GP+DLPlTwCqLm+5etOnAMfpk9WV1Z/sYa8XVz+5h32A47DP+TPElj8BqLqx+tejm+Bu+8H298f309X/2NNewOHb5/wZYuufAFTds/rt6itGN8Jd8s6WR+revsc9H1u9pTp/j3sCh2fE/Nm7rX8CUMs9nM9ro89y3qg/bzlm+/7j++/VP9nznsBhGTV/9m7Xv4J2qD7S8inAt7TdH0Daik9X31i9Y9D+v11dXD1h0P7AOKPnz17NEgCq/mf1B9VzmuvffUxur15Q/ergPl5bPTRfG8FMDmX+7M1sb4Tvbfkf3nNarg3gcPx5y3F5zehGqpPVq6sLqycN7gVY3yHNH1b2iJYrvk+qg6h3Vg8/5REb5xtb7gMe/RoppdapQ54/rOQe1T9uuThw9Ak4a32y+v4O/9OYy6qXN/71Ukrtro5l/rCiB1c/1vIDQqNPyFnqk9WPtryxHpOvrF7X+NdPKXX361jnz87N8ByAM3Vx9fyW2z+elFS4a7e23GP/iupVHffjNR9VXdvyneGjBvcCnN6W5s/OCACf2wXV46urWr4b+oKWgMCZu6nlwprrq99v+T3tLf6k5qXVNS3nyuXVRS0XDwLjzDJ/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOFP/F4UEhMPhtXLgAAAAAElFTkSuQmCC" />
              </defs>
            </svg>
          </button>
        </li>
      </ul>

      <button class="circles-header__add-person add-person navigation__item">
        <svg class="add-person__icon" width="26" height="26" viewBox="0 0 26 26" fill="none"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <mask id="mask0_591_19072" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="26"
            height="26">
            <rect width="26" height="26" fill="url(#pattern0)" />
          </mask>
          <g mask="url(#mask0_591_19072)">
            <rect width="26" height="26" fill="white" />
          </g>
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_591_19072" transform="scale(0.00195312)" />
            </pattern>
            <image id="image0_591_19072" width="512" height="512"
              xlink:href="data:image/png;base64,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" />
          </defs>
        </svg>
      </button>

      <ul class="circles-header__periods periods-menu circles-header__list navigation__item">
        <li class="periods-menu__item">
          <button class="periods-menu__button periods-menu__button--active">1937-1955</button>
        </li>
        <li class="periods-menu__item">
          <button class="periods-menu__button">1956 - 1990</button>
        </li>
        <li class="periods-menu__item">
          <button class="periods-menu__button">1991 - 2018</button>
        </li>
        <li class="periods-menu__item periods-menu__editor">
          <button class="periods-menu__editor-button">
            <svg class="periods-menu__icon" width="18" height="18" viewBox="0 0 18 18" fill="none"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <mask id="mask0_591_19075" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18"
                height="18">
                <rect width="18" height="18" fill="url(#pattern0)" />
              </mask>
              <g mask="url(#mask0_591_19075)">
                <rect width="18" height="18" fill="#548677" />
              </g>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_591_19075" transform="scale(0.00195312)" />
                </pattern>
                <image id="image0_591_19075" width="512" height="512"
                  xlink:href="data:image/png;base64,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" />
              </defs>
            </svg>
          </button>
        </li>
      </ul>

      <button class="circles-header__editor navigation__item">
        Редактировать
      </button>
    </nav>
  </header>

  <main class="circles-main">
    <h2 class="circles-main__title title--green">Режим редактирования</h2>
    <div class="circles-main__circle circle circle--4">
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--1">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--2">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--3">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--4">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--5">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--6">
      </div>
    </div>

    <div class="circles-main__circle circle circle--3">
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--1">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--2">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--3">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--4">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--5">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--6">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--7">
      </div>
    </div>

    <div class="circles-main__circle circle circle--2">
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--1">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--2">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--3">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--4">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--5">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--6">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--7">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--8">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--9">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--10">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--11">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--12">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--13">
      </div>
    </div>

    <div class="circles-main__circle circle circle--1">
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--1">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--2">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--3">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--4">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--5">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--6">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--7">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--8">
      </div>
    </div>

    <img src="img/user-avatar.png" alt="Name." width="100" height="100" class="circles-main__user-avatar">
  </main>
</section>
`);

export default class CircleBaseView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return circleBaseTemplate();
  }
}
