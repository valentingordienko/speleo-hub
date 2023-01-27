import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AddFromTemplateSolid.svg';

export function AddFromTemplateSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="AddFromTemplateSolid">
      <SVG />
    </Icon>
  );
}
