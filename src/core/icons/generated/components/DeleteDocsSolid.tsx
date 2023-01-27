import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeleteDocsSolid.svg';

export function DeleteDocsSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DeleteDocsSolid">
      <SVG />
    </Icon>
  );
}
