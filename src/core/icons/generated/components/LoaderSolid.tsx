import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LoaderSolid.svg';

export function LoaderSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="LoaderSolid">
      <SVG />
    </Icon>
  );
}
