/****************************************************************************
** Meta object code from reading C++ file 'breezedecoration.h'
**
** Created by: The Qt Meta Object Compiler version 68 (Qt 6.8.3)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../../../../kdecoration/breezedecoration.h"
#include <QtCore/qmetatype.h>

#include <QtCore/qtmochelpers.h>

#include <memory>


#include <QtCore/qxptype_traits.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'breezedecoration.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 68
#error "This file was generated using the moc from 6.8.3. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

#ifndef Q_CONSTINIT
#define Q_CONSTINIT
#endif

QT_WARNING_PUSH
QT_WARNING_DISABLE_DEPRECATED
QT_WARNING_DISABLE_GCC("-Wuseless-cast")
namespace {
struct qt_meta_tag_ZN6Breeze10DecorationE_t {};
} // unnamed namespace


#ifdef QT_MOC_HAS_STRINGDATA
static constexpr auto qt_meta_stringdata_ZN6Breeze10DecorationE = QtMocHelpers::stringData(
    "Breeze::Decoration",
    "tabletModeChanged",
    "",
    "init",
    "reconfigure",
    "recalculateBorders",
    "updateButtonsGeometry",
    "updateButtonsGeometryDelayed",
    "updateTitleBar",
    "updateAnimationState",
    "onTabletModeChanged",
    "mode",
    "updateScale"
);
#else  // !QT_MOC_HAS_STRINGDATA
#error "qtmochelpers.h not found or too old."
#endif // !QT_MOC_HAS_STRINGDATA

Q_CONSTINIT static const uint qt_meta_data_ZN6Breeze10DecorationE[] = {

 // content:
      12,       // revision
       0,       // classname
       0,    0, // classinfo
      10,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       1,       // signalCount

 // signals: name, argc, parameters, tag, flags, initial metatype offsets
       1,    0,   74,    2, 0x06,    1 /* Public */,

 // slots: name, argc, parameters, tag, flags, initial metatype offsets
       3,    0,   75,    2, 0x0a,    2 /* Public */,
       4,    0,   76,    2, 0x08,    3 /* Private */,
       5,    0,   77,    2, 0x08,    4 /* Private */,
       6,    0,   78,    2, 0x08,    5 /* Private */,
       7,    0,   79,    2, 0x08,    6 /* Private */,
       8,    0,   80,    2, 0x08,    7 /* Private */,
       9,    0,   81,    2, 0x08,    8 /* Private */,
      10,    1,   82,    2, 0x08,    9 /* Private */,
      12,    0,   85,    2, 0x08,   11 /* Private */,

 // signals: parameters
    QMetaType::Void,

 // slots: parameters
    QMetaType::Bool,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void, QMetaType::Bool,   11,
    QMetaType::Void,

       0        // eod
};

Q_CONSTINIT const QMetaObject Breeze::Decoration::staticMetaObject = { {
    QMetaObject::SuperData::link<KDecoration3::Decoration::staticMetaObject>(),
    qt_meta_stringdata_ZN6Breeze10DecorationE.offsetsAndSizes,
    qt_meta_data_ZN6Breeze10DecorationE,
    qt_static_metacall,
    nullptr,
    qt_incomplete_metaTypeArray<qt_meta_tag_ZN6Breeze10DecorationE_t,
        // Q_OBJECT / Q_GADGET
        QtPrivate::TypeAndForceComplete<Decoration, std::true_type>,
        // method 'tabletModeChanged'
        QtPrivate::TypeAndForceComplete<void, std::false_type>,
        // method 'init'
        QtPrivate::TypeAndForceComplete<bool, std::false_type>,
        // method 'reconfigure'
        QtPrivate::TypeAndForceComplete<void, std::false_type>,
        // method 'recalculateBorders'
        QtPrivate::TypeAndForceComplete<void, std::false_type>,
        // method 'updateButtonsGeometry'
        QtPrivate::TypeAndForceComplete<void, std::false_type>,
        // method 'updateButtonsGeometryDelayed'
        QtPrivate::TypeAndForceComplete<void, std::false_type>,
        // method 'updateTitleBar'
        QtPrivate::TypeAndForceComplete<void, std::false_type>,
        // method 'updateAnimationState'
        QtPrivate::TypeAndForceComplete<void, std::false_type>,
        // method 'onTabletModeChanged'
        QtPrivate::TypeAndForceComplete<void, std::false_type>,
        QtPrivate::TypeAndForceComplete<bool, std::false_type>,
        // method 'updateScale'
        QtPrivate::TypeAndForceComplete<void, std::false_type>
    >,
    nullptr
} };

void Breeze::Decoration::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    auto *_t = static_cast<Decoration *>(_o);
    if (_c == QMetaObject::InvokeMetaMethod) {
        switch (_id) {
        case 0: _t->tabletModeChanged(); break;
        case 1: { bool _r = _t->init();
            if (_a[0]) *reinterpret_cast< bool*>(_a[0]) = std::move(_r); }  break;
        case 2: _t->reconfigure(); break;
        case 3: _t->recalculateBorders(); break;
        case 4: _t->updateButtonsGeometry(); break;
        case 5: _t->updateButtonsGeometryDelayed(); break;
        case 6: _t->updateTitleBar(); break;
        case 7: _t->updateAnimationState(); break;
        case 8: _t->onTabletModeChanged((*reinterpret_cast< std::add_pointer_t<bool>>(_a[1]))); break;
        case 9: _t->updateScale(); break;
        default: ;
        }
    }
    if (_c == QMetaObject::IndexOfMethod) {
        int *result = reinterpret_cast<int *>(_a[0]);
        {
            using _q_method_type = void (Decoration::*)();
            if (_q_method_type _q_method = &Decoration::tabletModeChanged; *reinterpret_cast<_q_method_type *>(_a[1]) == _q_method) {
                *result = 0;
                return;
            }
        }
    }
}

const QMetaObject *Breeze::Decoration::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *Breeze::Decoration::qt_metacast(const char *_clname)
{
    if (!_clname) return nullptr;
    if (!strcmp(_clname, qt_meta_stringdata_ZN6Breeze10DecorationE.stringdata0))
        return static_cast<void*>(this);
    return KDecoration3::Decoration::qt_metacast(_clname);
}

int Breeze::Decoration::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = KDecoration3::Decoration::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 10)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 10;
    }
    if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 10)
            *reinterpret_cast<QMetaType *>(_a[0]) = QMetaType();
        _id -= 10;
    }
    return _id;
}

// SIGNAL 0
void Breeze::Decoration::tabletModeChanged()
{
    QMetaObject::activate(this, &staticMetaObject, 0, nullptr);
}
QT_WARNING_POP
