import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AddFromTemplateOutline.svg';

export function AddFromTemplateOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AddFromTemplateOutline">
      <SVG />
    </Icon>
  );
}
