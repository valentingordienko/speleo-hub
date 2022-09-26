import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AddFromTemplateSolid.svg';

export function AddFromTemplateSolid(props: TProps) {
  return (
    <Icon {...props} name="AddFromTemplateSolid">
      <SVG />
    </Icon>
  );
}
